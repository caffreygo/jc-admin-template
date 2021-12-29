import { http } from '@/plugins/axios';

function info() {
  return http.request({
    url: 'user/get',
  });
}

export default { info };
