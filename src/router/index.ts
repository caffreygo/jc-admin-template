import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Dashboard from '../views/dashboard/index.vue';
import System from '../views/system/index.vue';

export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard,
    },
    {
      path: '/system',
      name: 'System',
      component: System,
    },
  ],
});

// config router
export function setupRouter(app: App<Element>) {
  app.use(router);
}
