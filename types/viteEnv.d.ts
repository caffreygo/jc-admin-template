interface ViteEnv {
  VITE_ROUTE_AUTOLOAD: boolean;
  VITE_API_URL: string;
}

// Support type hints for env variables in components
// https://cn.vitejs.dev/guide/env-and-mode.html#intellisense
interface ImportMetaEnv extends ViteEnv {}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
