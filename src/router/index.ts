import { App } from 'vue';
import guard from './guard';
import routes from './routes';
import autoload from './autoload';
import userStore from '@/store/userStore';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [...routes],
});

export async function setupRouter(app: App) {
  const user = userStore();
  await user.getUserInfo();

  autoload(router);
  guard(router);
  app.use(router);
}

export default router;
