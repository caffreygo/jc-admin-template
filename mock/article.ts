import { Random } from 'mockjs';
import { MockMethod } from 'vite-plugin-mock';

export default [
  {
    url: '/api/article/list',
    method: 'get',
    response: () => {
      return {
        code: 200,
        message: '上传成功',
        type: 'success',
        data: new Array(10).fill('').map((article, index) => ({
          id: Random.guid(),
          title: Random.ctitle(),
          content: Random.cparagraph(),
        })),
      };
    },
  },
] as MockMethod[];
