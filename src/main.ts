// main.ts
import { createApp } from 'vue';
import App from './App.vue';

function bootstrap() {
  const app = createApp(App);
  app.mount('#app');
}

bootstrap();
