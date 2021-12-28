import vue from '@vitejs/plugin-vue';
import { Plugin } from 'vite';

export default function setupPlugins(
  isBuild: boolean,
  env: Record<string, any>
) {
  const plugins: Plugin[] = [vue()];
  return plugins;
}
