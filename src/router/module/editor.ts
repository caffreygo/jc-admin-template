import { RouteRecordRaw } from 'vue-router';

export default {
  name: 'editor',
  path: '/editor',
  component: () => import('@/layouts/admin.vue'),
  meta: {
    auth: true,
    menu: {
      title: '编辑器',
      icon: 'fab fa-app-store-ios',
    },
  },
  children: [
    {
      name: 'editor.base',
      path: 'base',
      meta: {
        menu: {
          title: '基础编辑器',
        },
      },
      component: () => import('@/views/editor/base.vue'),
    },
    {
      name: 'editor.markdown',
      path: 'markdown',
      meta: {
        menu: {
          title: 'Markdown编辑器',
        },
      },
      component: () => import('@/views/editor/markdown.vue'),
    },
  ],
} as RouteRecordRaw;
