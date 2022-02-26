declare namespace toastui {
  class Editor {
    constructor(options: any) {}
    getMarkdown: () => string;
    getHTML: () => string;
    on: (event: string, callback: Function) => void;
  }
}
