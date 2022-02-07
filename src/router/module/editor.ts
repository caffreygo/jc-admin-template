import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    title: '编辑器',
    icon: 'fab fa-app-store-ios',
    show: true,
  },
  children: [
    {
      name: 'base',
      path: 'base',
      meta: {
        title: '基础编辑器',
        show: true,
      },
      component: () => import('@/views/editor/base.vue'),
    },
    {
      name: 'markdown',
      path: 'markdown',
      meta: {
        title: 'Markdown编辑器',
        show: true,
      },
      component: () => import('@/views/editor/markdown.vue'),
    },
  ],
} as RouteRecordRaw;
