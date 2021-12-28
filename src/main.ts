import { createApp } from 'vue';
import App from './App.vue';
import router, { setupRouter } from './router/index';
import { setupPlugins } from './plugins';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);
  setupPlugins();

  await router.isReady();
  app.mount('#app');
}

bootstrap();
