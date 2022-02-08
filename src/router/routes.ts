import { RouteRecordRaw } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/auth/login.vue'),
    meta: {
      guest: true,
    },
  },
  {
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/errors/404.vue'),
  },
] as RouteRecordRaw[];

export default routes;
