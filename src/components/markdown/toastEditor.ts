export default class {
  editor;
  constructor(el: string, initialValue: string, height: string) {
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height,
      initialValue,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
    });
  }
}
