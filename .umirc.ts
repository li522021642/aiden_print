import { defineConfig } from '@umijs/max';

export default defineConfig({
  history: {
    type: 'hash',
  },
  hash: true, // 配置是否让生成的文件包含 hash 后缀，通常用于增量发布和避免浏览器加载缓存
  base: '/', // 设置路由前缀，通常用于部署到非根目录。
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/', // 配置 webpack 的 publicPath。当打包的时候，webpack 会在静态文件路径前面添加 publicPath 的值
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
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
