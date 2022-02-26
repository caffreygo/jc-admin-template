import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/upload/image',
    method: 'post',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        type: 'success',
        data: {
          url: '/images/avatar.jpeg',
        },
      };
    },
  },
] as MockMethod[];
