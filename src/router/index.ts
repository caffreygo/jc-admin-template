import type { App } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';
import autoloadRoutes from './autoload';
import guard from './guard';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes, ...autoloadRoutes],
});

export function setupRouter(app: App<Element>) {
  guard(router);
  app.use(router);
}

export default router;
