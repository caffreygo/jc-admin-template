import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';

export const useStore = defineStore('main', {
  state: () => ({
    routes: getRoutes(),
  }),
});

function getRoutes() {
  const router = useRouter();
  const routes = router
    .getRoutes()
    .filter((route) => route.meta?.show && route.children.length)
    .map((route) => {
      route.children = route.children.filter((route) => route.meta?.show);
      return route;
    })
    .filter((route) => route.children.length);
  return routes;
}
