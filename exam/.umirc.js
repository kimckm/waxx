export default {
  antd: {},
  dva: {},
  proxy: {
    '/graphql': {
      target: 'http://8.135.66.238',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' }
    },
  },
}
