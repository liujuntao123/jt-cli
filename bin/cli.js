#!/usr/bin/env node
//第一行其中#!/usr/bin/env node表示用node解析器执行本文件。

const program = require('commander')
const pkg = require('../package')
const chalk = require('chalk')
const inquirer = require('inquirer')
const path=require('path')
const fse=require('fs-extra')
const PackageManager = require('../lib/util/ProjectPackageManager')



/**
* version
*/
program
.version(chalk.green(`${pkg.version}`))

const templateOptions={
    'Vue2.x + Antd1.x':'../template/vue2/resource',
    'Vue3.x + Antd2.x':'../template/vue3/resource'
}

// 定义问题
let question = [
    {
        name: "select-template",
        type: 'list',
        choices: Object.keys(templateOptions),
    }
  ]

/**
* init 项目
*/
program
.command('create <app-name>')
.description('九天平台通用前端工程模板')
.action(async( name, options) => {
    const result=await inquirer.prompt(question)
    const cwd = options.cwd || process.cwd()
    console.log(chalk.green('开始初始化项目...'))

    // 复制文件夹
    console.log(chalk.green('开始复制模板...'))
    const dirPath=templateOptions[result['select-template']]
    await fse.copy(path.join(__dirname,dirPath),path.join(cwd,name))

    // 安装依赖
    console.log(chalk.green('开始安装项目依赖,可能会花费一些时间...'))
    const context=path.join(cwd,name)
    const pm = new PackageManager({ context })
    await pm.install()

    console.log(chalk.green('项目初始化完成!'));
    console.log('运行',chalk.green(`cd ${name} && npm run serve`),'以启动项目');

    
})

program.parse(process.argv)