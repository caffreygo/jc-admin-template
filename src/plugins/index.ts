import { App } from 'vue';
import { camelCase } from 'lodash';
import { setupTailwindcss } from './tailwindcss';
// import setupElementPlus from './elementui'; 全局注册element组件
import setupPinia from './pinia';

export function setupPlugins(app: App) {
  // autoRegisterComponent(app);
  setupTailwindcss();
  setupPinia(app);
}

// 自动注册全局组件  通过unplugin插件代替
// function autoRegisterComponent(app: App) {
//   const components = import.meta.globEager('../components/form/*.vue');
//   Object.keys(components).forEach((key) => {
//     const name = key.split('/').pop()?.split('.').shift() as string;
//     app.component(camelCase(name), components[key].default);
//   });
// }
