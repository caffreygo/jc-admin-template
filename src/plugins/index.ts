import { App } from 'vue';
import { camelCase } from 'lodash';
import { setupTailwindcss } from './tailwindcss';
// import setupElementPlus from './elementui';
import setupPinia from './pinia';

export function setupPlugins(app: App) {
  autoRegisterComponent(app);
  setupTailwindcss();
  // setupElementPlus(app);
  setupPinia(app);
}

function autoRegisterComponent(app: App) {
  const components = import.meta.globEager('../components/form/*.vue');
  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift() as string;
    app.component(camelCase(name), components[key].default);
  });
}
