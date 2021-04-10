export default {
  antd: {},
  dva: {},
  proxy: {
    '/api': {
      target: 'http://localhost:9999',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  history: { type: 'hash' },
  routes: [
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/', component: '@/pages/topic-adm/index' },
        { exact: true, path: '/practice', component: '@/pages/practice/index' },
        { exact: true, path: '/exam-adm', component: '@/pages/exam-adm/index' },
        { exact: true, path: '/question-adm', component: '@/pages/question-adm/index' },
        { exact: true, path: '/topic-adm', component: '@/pages/topic-adm/index' },
      ],
    },
  ],
}
