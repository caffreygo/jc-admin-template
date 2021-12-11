import './styles/index.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { setupRouter } from './router/index';

function bootstrap() {
  const app = createApp(App);
  setupRouter(app);
  app.mount('#app');
}

bootstrap();
