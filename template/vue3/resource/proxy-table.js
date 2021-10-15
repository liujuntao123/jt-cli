module.exports = {
  '/api/test': {
    target: 'http://172.31.197.131:32082/',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/api/test/': '/',
    },
  },
  '/api/dev': {
    target: 'http://172.31.197.101:32082/',
    changeOrigin: true,
    logLevel: 'debug',
    pathRewrite: {
      '^/api/dev/': '/',
    },
  },
};
