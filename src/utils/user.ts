import userApi, { ILoginData } from '@/api/userApi';
import { CacheEnum } from '@/enum/cacheEnum';
import router from '@/router';
import userStore from '@/store/userStore';
import store from './store';

export async function login(values: ILoginData) {
  const {
    data: { token },
  } = await userApi.login(values);
  store.set(CacheEnum.TOKEN_NAME, { token }, 3000);
  const routeName = store.get(CacheEnum.REDIRECT_ROUTE_NAME) ?? 'home';
  router.push({ name: routeName });
}

export function logout() {
  store.remove(CacheEnum.TOKEN_NAME);
  router.push('/');
  userStore().info = null;
}
