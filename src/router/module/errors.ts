import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/error.vue'),
  meta: {
    title: '错误页面',
    icon: 'fab fa-algolia',
    isClick: true,
    show: true,
  },
  children: [
    {
      name: 'error.404',
      path: '404',
      meta: {
        title: '404页面',
        isClick: false,
        show: true,
      },
      component: () => import('@/views/errors/404.vue'),
    },
    {
      name: 'error.403',
      path: '403',
      meta: {
        title: '403页面',
        isClick: false,
        show: true,
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
