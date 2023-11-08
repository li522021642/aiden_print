import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  base: '/aiden_print/',
  publicPath: '/aiden_print/',
  layout: {
    title: 'Aiden数学打印',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
      layout: false,
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
      layout: false,
    },
    {
      name: '数字练习',
      path: '/number',
      component: './Number',
      layout: false,
    },
  ],
  npmClient: 'pnpm',
});
