export default {
  antd: {},
  dva: {},
  proxy: {
    '/graphql': {
      target: 'http://8.135.66.238',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' }
    },
    '/api': {
      target: 'http://8.135.66.238',
      changeOrigin: true,
      // pathRewrite: { '^/api': '' }
    },
  },
  history: { type: 'hash' },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/exam-adm/index' },
        { exact: true, path: '/practice', component: '@/pages/practice/index' },
        { exact: true, path: '/exam-adm', component: '@/pages/exam-adm/index' },
        { exact: true, path: '/question-adm', component: '@/pages/question-adm/index' },
      ],
    },
  ],
}
