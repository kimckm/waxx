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
  routes: [
    { 
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/index' },
        { exact: true, path: '/exam-adm', component: '@/pages/exam-adm' },
      ],
    },
  ],
}
