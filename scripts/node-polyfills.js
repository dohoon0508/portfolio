/* eslint-env node */
/* eslint-disable no-undef */
// Node 18에는 Blob은 있는데 File이 없는 경우가 있어 Gatsby3+remark 의존성에서 File을 요구하며 터짐
// 그래서 File을 Blob 기반으로 간단히 만들어 globalThis에 주입

const { Blob } = globalThis;

if (typeof globalThis.File === 'undefined') {
  globalThis.File = class File extends Blob {
    constructor(parts = [], name = 'unknown', options = {}) {
      super(parts, options);
      this.name = String(name);
      this.lastModified = options.lastModified ? Number(options.lastModified) : Date.now();
      this.webkitRelativePath = '';
    }
  };
}
