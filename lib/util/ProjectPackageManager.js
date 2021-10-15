const path = require('path')

const minimist = require('minimist')
const LRU = require('lru-cache')

const stripAnsi = require('strip-ansi')

const {
  execa,
  semver,
  request,
  resolvePkg,
  error
} = require('@vue/cli-shared-utils')

const { executeCommand } = require('./executeCommand')

const registries = require('./registries')
const shouldUseTaobao = require('./shouldUseTaobao')

const metadataCache = new LRU({
  max: 200,
  maxAge: 1000 * 60 * 30 // 30 min.
})


const PACKAGE_MANAGER_CONFIG = {
  npm: {
    install: ['install', '--loglevel', 'error']
  }
}


// extract the package scope from the full package name
// the result includes the initial @ character
function extractPackageScope (packageName) {
  const scopedNameRegExp = /^(@[^/]+)\/.*$/
  const result = packageName.match(scopedNameRegExp)

  if (!result) {
    return undefined
  }

  return result[1]
}

class PackageManager {
  constructor ({ context, forcePackageManager } = {}) {
    this.context = context || process.cwd()
    this._registries = {}
    this.bin = 'npm'

    // npm doesn't support package aliases until v6.9
    const MIN_SUPPORTED_NPM_VERSION = '6.9.0'
    const npmVersion = stripAnsi(execa.sync('npm', ['--version']).stdout)

    if (semver.lt(npmVersion, MIN_SUPPORTED_NPM_VERSION)) {
      throw new Error(
        'You are using an outdated version of NPM.\n' +
        'It does not support some core functionalities of Vue CLI.\n' +
        'Please upgrade your NPM version.'
      )
    }

    if (semver.gte(npmVersion, '7.0.0')) {
      this.needsPeerDepsFix = true
    }
    
    // Plugin may be located in another location if `resolveFrom` presents.
    const projectPkg = resolvePkg(this.context)
    const resolveFrom = projectPkg && projectPkg.vuePlugins && projectPkg.vuePlugins.resolveFrom

    // Logically, `resolveFrom` and `context` are distinct fields.
    // But in Vue CLI we only care about plugins.
    // So it is fine to let all other operations take place in the `resolveFrom` directory.
    if (resolveFrom) {
      this.context = path.resolve(context, resolveFrom)
    }
  }

  // Any command that implemented registry-related feature should support
  // `-r` / `--registry` option
  async getRegistry (scope) {
    const cacheKey = scope || ''
    if (this._registries[cacheKey]) {
      return this._registries[cacheKey]
    }

    const args = minimist(process.argv, {
      alias: {
        r: 'registry'
      }
    })

    let registry
    if (args.registry) {
      registry = args.registry
    } else if (!process.env.VUE_CLI_TEST && await shouldUseTaobao(this.bin)) {
      registry = registries.taobao
    } else {
      try {
        if (scope) {
          registry = (await execa(this.bin, ['config', 'get', scope + ':registry'])).stdout
        }
        if (!registry || registry === 'undefined') {
          registry = (await execa(this.bin, ['config', 'get', 'registry'])).stdout
        }
      } catch (e) {
        // Yarn 2 uses `npmRegistryServer` instead of `registry`
        registry = (await execa(this.bin, ['config', 'get', 'npmRegistryServer'])).stdout
      }
    }

    this._registries[cacheKey] = stripAnsi(registry).trim()
    return this._registries[cacheKey]
  }


  async setRegistryEnvs () {
    const registry = await this.getRegistry()

    process.env.npm_config_registry = registry
    process.env.YARN_NPM_REGISTRY_SERVER = registry

    this.setBinaryMirrors()
  }

  // set mirror urls for users in china
  async setBinaryMirrors () {
    const registry = await this.getRegistry()

    if (registry !== registries.taobao) {
      return
    }

    try {
      // chromedriver, etc.
      const binaryMirrorConfigMetadata = await this.getMetadata('binary-mirror-config', { full: true })
      const latest = binaryMirrorConfigMetadata['dist-tags'] && binaryMirrorConfigMetadata['dist-tags'].latest
      const mirrors = binaryMirrorConfigMetadata.versions[latest].mirrors.china
      for (const key in mirrors.ENVS) {
        process.env[key] = mirrors.ENVS[key]
      }

      // Cypress
      const cypressMirror = mirrors.cypress
      const defaultPlatforms = {
        darwin: 'osx64',
        linux: 'linux64',
        win32: 'win64'
      }
      const platforms = cypressMirror.newPlatforms || defaultPlatforms
      const targetPlatform = platforms[require('os').platform()]
      // Do not override user-defined env variable
      // Because we may construct a wrong download url and an escape hatch is necessary
      if (targetPlatform && !process.env.CYPRESS_INSTALL_BINARY) {
        const projectPkg = resolvePkg(this.context)
        if (projectPkg && projectPkg.devDependencies && projectPkg.devDependencies.cypress) {
          const wantedCypressVersion = await this.getRemoteVersion('cypress', projectPkg.devDependencies.cypress)
          process.env.CYPRESS_INSTALL_BINARY =
            `${cypressMirror.host}/${wantedCypressVersion}/${targetPlatform}/cypress.zip`
        }
      }
    } catch (e) {
      // get binary mirror config failed
    }
  }

  // https://github.com/npm/registry/blob/master/docs/responses/package-metadata.md
  async getMetadata (packageName, { full = false } = {}) {
    const scope = extractPackageScope(packageName)
    const registry = await this.getRegistry(scope)

    const metadataKey = `${this.bin}-${registry}-${packageName}`
    let metadata = metadataCache.get(metadataKey)

    if (metadata) {
      return metadata
    }

    const headers = {}
    if (!full) {
      headers.Accept = 'application/vnd.npm.install-v1+json;q=1.0, application/json;q=0.9, */*;q=0.8'
    }

    const authConfig = await this.getAuthConfig(scope)
    if ('password' in authConfig) {
      const credentials = Buffer.from(`${authConfig.username}:${authConfig.password}`).toString('base64')
      headers.Authorization = `Basic ${credentials}`
    }
    if ('token' in authConfig) {
      headers.Authorization = `Bearer ${authConfig.token}`
    }

    const url = `${registry.replace(/\/$/g, '')}/${packageName}`
    try {
      metadata = (await request.get(url, { headers }))
      if (metadata.error) {
        throw new Error(metadata.error)
      }
      metadataCache.set(metadataKey, metadata)
      return metadata
    } catch (e) {
      error(`Failed to get response from ${url}`)
      throw e
    }
  }

  async getRemoteVersion (packageName, versionRange = 'latest') {
    const metadata = await this.getMetadata(packageName)
    if (Object.keys(metadata['dist-tags']).includes(versionRange)) {
      return metadata['dist-tags'][versionRange]
    }
    const versions = Array.isArray(metadata.versions) ? metadata.versions : Object.keys(metadata.versions)
    return semver.maxSatisfying(versions, versionRange)
  }


  async runCommand (command, args) {
    const prevNodeEnv = process.env.NODE_ENV
    // In the use case of Vue CLI, when installing dependencies,
    // the `NODE_ENV` environment variable does no good;
    // it only confuses users by skipping dev deps (when set to `production`).
    delete process.env.NODE_ENV

    await this.setRegistryEnvs()
    await executeCommand(
      this.bin,
      [
        ...PACKAGE_MANAGER_CONFIG[this.bin][command],
        ...(args || [])
      ],
      this.context
    )

    if (prevNodeEnv) {
      process.env.NODE_ENV = prevNodeEnv
    }
  }

  async install () {
    const args = []

    if (this.needsPeerDepsFix) {
      args.push('--legacy-peer-deps')
    }

    return await this.runCommand('install', args)
  }

}

module.exports = PackageManager
