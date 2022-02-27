import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';
import { setupMockPlugin } from './mock';
import { visualizer } from 'rollup-plugin-visualizer';
import autoImport from './autoImport';

export default function setupPlugins(isBuild: boolean, env: ViteEnv) {
  const plugins: Plugin[] = [vue()];
  autoImport(plugins);
  setupMockPlugin(plugins, isBuild);
  return [...plugins, visualizer()];
}
