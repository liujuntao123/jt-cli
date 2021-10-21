import defaultConfig from './default.config';
import devConfig from './dev.config';
import testConfig from './test.config';
import productConfig from './product.config';

// 本地代理的环境配置
export const proxyEnv = 'dev';

interface Config {
  keycloakUrl: string;
  portalUrl: string;
  title: string;
}

function getConfig(): Config {
  return { defaultConfig, devConfig, testConfig, productConfig }[`${proxyEnv}Config`] || defaultConfig;
}
export default getConfig();
