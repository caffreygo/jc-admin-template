import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    auth: true,
    menu: {
      title: '错误页面',
      icon: 'fab fa-algolia',
    },
  },
  children: [
    {
      name: 'error.404',
      path: '404',
      meta: {
        menu: {
          title: '404页面',
        },
      },
      component: () => import('@/views/errors/404.vue'),
    },
    {
      name: 'error.403',
      path: '403',
      meta: {
        menu: {
          title: '403页面',
        },
      },
      component: () => import('@/views/errors/403.vue'),
    },
    {
      name: 'error.500',
      path: '500',
      component: () => import('@/views/errors/500.vue'),
    },
  ],
} as RouteRecordRaw;
