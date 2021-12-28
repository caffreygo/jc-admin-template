import { cloneDeep } from 'lodash';

// support env type hints in vite configuration files
export function parseEnv(env: Record<string, any>): ViteEnv {
  const envs: any = cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false')
      envs[key] = value === 'true' ? true : false;
    else if (/^\d+$/.test(value)) envs[key] = Number(value);
    else if (value === 'null') envs[key] = null;
    else if (value === 'undefined') envs[key] = undefined;
  });
  return envs;
}
