import { http } from '@/plugins/axios';

export interface UploadImageResponse {
  url: string;
}

function uploadImage(data: FormData) {
  return http.request<UploadImageResponse>({
    url: 'upload/image',
    method: 'post',
  });
}

export default { uploadImage };
