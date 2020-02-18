const config = require('./db');
// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  // ssr: true,
  routes: [
    //   以pages为根目录
    {
      path: '/',
      // 这里相对根目录,文件后缀名不能缺少
      component: '../layouts/index.js',
      routes: [
        {
          path: '/login',
          component: './login',
        },
        {
          path: '/account',
          component: './account',
        },
        {
          path: '/account/myinfo',
          component: './account/myinfo',
        },
        {
          path: '/account/chous',
          component: './account/chous',
        },
        {
          path: '/account/username',
          component: './account/username',
        },
        {
          path: '/account/resetPass',
          component: './account/resetPass',
        },
        {
          path: '/account/avatar',
          component: './account/avatar',
        },
        {
          path: '/setPass',
          component: './setPass',
        },
        {
          path: '/',
          component: './index.js',
        },
        {
          path: '/search',
          component: './search/index',
        },
        {
          component: './NoFound',
        },
      ],
    },
    {
      component: './NoFound',
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: false,
        title: 'meituanAn',
        dll: false,
        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  theme: {
    'primary-color': '#FFBD00',
  },
  proxy: {
    '/server': {
      target: `http://localhost:${config.port}`,
      changeOrigin: true,
    },
  },
};
