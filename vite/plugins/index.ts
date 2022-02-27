import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
import { setupMockPlugin } from './mock';
import { visualizer } from 'rollup-plugin-visualizer';
import { setupElementPlugin } from './element';

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  setupElementPlugin(plugins);
  setupMockPlugin(plugins, isBuild);
  return [...plugins, visualizer()];
}

// type Record<T extends keyof any, D> = {
//   [P in T]: D;
// };
