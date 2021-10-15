const proxyTable = require('./proxy-table');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: '/',
  devServer: {
    proxy: proxyTable,
  },
  configureWebpack() {
    const devPlugins = [
      /**
       * 缓存加速二次构建速度
       */
      new HardSourceWebpackPlugin(),
      new HardSourceWebpackPlugin.ExcludeModulePlugin([
        {
          test: /mini-css-extract-plugin[\\/]dist[\\/]loader/,
        },
      ]),
    ];
    if (IS_DEV) {
      return {
        plugins: devPlugins,
      };
    }
  },
};
