export default {
  antd: {},
  dva: {},
  proxy: {
    '/api': {
      target: 'http://localhost:12276/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    },
  },
}
