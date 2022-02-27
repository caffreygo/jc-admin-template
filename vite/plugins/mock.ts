import { Plugin } from 'vite';
import { viteMockServe } from 'vite-plugin-mock';

export function setupMockPlugin(plugins: Plugin[], isBuild: boolean) {
  plugins.push(
    viteMockServe({
      mockPath: 'mock',
      localEnabled: !isBuild,
    })
  );
}
