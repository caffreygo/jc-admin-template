import { http } from '@/plugins/axios';

export interface User {
  name: string;
  age: number;
  avatar: string;
}

function info() {
  return http.request<User>({
    url: 'user/info',
  });
}

interface LoginInterface {
  token: string;
}

function login() {
  return http.request<LoginInterface>({
    url: 'login',
    method: 'post',
  });
}

export default { info, login };
