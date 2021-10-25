const proxyTable = require('./proxy-table');

module.exports = {
  publicPath: '/',
  devServer: {
    proxy: proxyTable,
  }
};
