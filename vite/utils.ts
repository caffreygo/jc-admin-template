import { cloneDeep } from 'lodash';

export function parseEnv(env: Record<string, any>) {
  const envs = cloneDeep(env);
  Object.entries(env).forEach(([key, value]) => {
    if (value === 'true' || value === 'false') {
      envs[key] = value === 'true' ? true : false;
    }
    if (/^\d+$/.test(value)) {
      envs[key] = parseInt(value);
    }
  });
  return envs;
}
