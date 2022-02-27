import { UploadImageResponse } from '@/api/uploadApi';

export default class {
  editor: wangEditor;
  constructor(el: string, callback: Function, config: { [key: string]: any }) {
    this.editor = new wangEditor(el);
    Object.assign(this.editor.config, config);
    this.editor.config.onchange = callback;
    this.editor.config.uploadImgHooks = this.uploadImage();

    this.editor.create();
    this.editor.txt.html(config.modelValue);
  }

  uploadImage() {
    return {
      // https://www.wangeditor.com/doc/pages/07-%E4%B8%8A%E4%BC%A0%E5%9B%BE%E7%89%87/09-%E5%9B%9E%E8%B0%83%E5%87%BD%E6%95%B0.html
      customInsert: function (
        insertImgFn: Function,
        result: ResponseResult<UploadImageResponse>
      ) {
        insertImgFn(result.data.url);
      },
    };
  }
}
