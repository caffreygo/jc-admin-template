import uploadApi from '@/api/uploadApi';

export default class {
  editor: toastui.Editor;
  isFullscreen: boolean;
  height: string;
  constructor(el: string, initialValue: string, height: string) {
    this.height = height;
    this.isFullscreen = false;
    this.editor = new toastui.Editor({
      el: document.querySelector(el),
      height,
      initialValue,
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      toolbarItems: this.toolbar(),
    });
    this.ImageHook();
  }

  private toolbar() {
    return [
      ['heading', 'bold', 'italic', 'strike'],
      ['hr', 'quote'],
      ['ul', 'ol', 'task', 'indent', 'outdent'],
      ['table', 'image', 'link'],
      ['code', 'codeblock'],
      // Using Option: Customize the last button
      [
        {
          el: this.fullscreen(),
          command: 'bold',
          tooltip: 'Custom Bold',
        },
      ],
    ];
  }

  private fullscreen() {
    const button = document.createElement('button');
    button.innerHTML = '全屏';
    button.style.margin = '0';
    // click button to toggle fullscreen state
    button.addEventListener('click', () => {
      this.toggleFullScreen();
    });
    // click ESC to exit fullcreen state
    document.documentElement.addEventListener(
      'keyup',
      (event: KeyboardEvent) => {
        if (event.key === 'Escape' && this.isFullscreen) {
          this.toggleFullScreen();
        }
      }
    );
    return button;
  }

  private toggleFullScreen() {
    const uiEl = document.querySelector(
      '.toastui-editor-defaultUI'
    ) as HTMLDivElement;

    uiEl.classList.toggle('fullscreen');
    this.isFullscreen = !this.isFullscreen;
    if (this.isFullscreen === false) {
      this.editor.setHeight(this.height);
    } else {
      this.editor.setHeight('100vh');
    }
    this.editor.focus();
  }

  private ImageHook() {
    this.editor.removeHook('addImageBlobHook');
    this.editor.addHook(
      'addImageBlobHook',
      async (blob: any, callback: Function) => {
        console.log(blob);
        const form = new FormData();
        form.append('file', blob, blob.name);
        const response = await uploadApi.uploadImage(form);
        callback(response.data.url, blob.name);
      }
    );
  }
}
