import { http } from '@/plugins/axios';

interface User {
  name: string;
  age: number;
  avatar: string;
}

function info() {
  return http.request<User>({
    url: '/user/get',
  });
}

export default { info };
