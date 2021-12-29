import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/user/get',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '请求成功',
        type: 'success',
        data: {
          name: 'Jerry Chen',
          age: 18,
        },
      };
    },
  },
] as MockMethod[];
