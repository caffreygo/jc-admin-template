import utils from '@/utils';
import { Router, RouteRecordRaw } from 'vue-router';
import getRoutes from './view';
import autoloadModuleRoutes from './module';
import userStore from '@/store/userStore';

let routes: RouteRecordRaw[] = utils.env.VITE_ROUTE_AUTOLOAD
  ? getRoutes()
  : autoloadModuleRoutes();

function autoload(router: Router) {
  const user = userStore();
  routes = routes.map((route) => {
    route.children = route.children?.filter((r) => {
      const permission = r.meta?.permission;
      return permission ? user.info?.permissions.includes(permission) : true;
    });
    return route;
  });
  routes.forEach((route) => {
    router.addRoute(route);
  });
}
export default autoload;
