import utils from '@/utils';
import { RouteRecordRaw } from 'vue-router';
import getRoutes from './view';
import autoloadModuleRoutes from './module';

let routes = [] as RouteRecordRaw[];

if (utils.env.VITE_ROUTE_AUTOLOAD) {
  routes = getRoutes();
} else {
  routes = autoloadModuleRoutes();
}

export default routes;
