import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import routes from './routes';
import layoutRoutes from './autoload';
import guard from './guard';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...routes, ...layoutRoutes],
});

export function setupRouter(app: App<Element>) {
  guard(router);
  app.use(router);
}

export default router;
