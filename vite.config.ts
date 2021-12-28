import { ConfigEnv, loadEnv } from 'vite';
import alias from './vite/alias';
import { parseEnv } from './vite/utils';
import setupPlugins from './vite/plugins';

export default ({ command, mode }: ConfigEnv) => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = parseEnv(loadEnv(mode, root));
  return {
    plugins: setupPlugins(isBuild, env),
    resolve: {
      alias,
    },
  };
};
