import { http } from '@/plugins/axios';

export interface Article {
  id: string;
  title: string;
  content: string;
}

function getArticle() {
  return http.request<Article[]>({
    url: 'article/list',
    method: 'get',
  });
}

export default { getArticle };
