export default {
  antd: {},
  dva: {},
  proxy: {
    '/api': {
      target: 'http://8.135.66.238:12276/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    },
  },
}
