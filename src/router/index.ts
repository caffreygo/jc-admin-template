import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index.vue'),
    },
  ],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
