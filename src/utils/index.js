export function className(...args) {
  const names = [...args];
  let res = '';
  names.forEach(name => {
    if (Array.isArray(name)) {
      res += Array.from(new Set(name)).join(' ').trim();
    } else {
      res += name + ' ';
    }
  });

  return res.trim();
}

export class ScrollInfo {
  constructor(options = {}) {
    this.target = options.target || window;
    this.scrollCallback = options.onScroll || this.scrollCallback;
    this.scrollX = 0;
    this.scrollY = 0;
    this.scrollHeight = 0;
    this.scrollPercent = 0;
    this.atTop = true;
    this.atBottom = false;

    this.init();
  }

  init() {
    this.target.addEventListener('scroll', this.onScroll);
  }

  scrollCallback = () => {};

  onScroll = (e) => {
    // console.log(e);
    const { scrollTop, scrollHeight } = e.target || {};
    this.scrollHeight = scrollHeight;
    this.scrollY = scrollTop;
    const original = scrollTop / scrollHeight;
    this.scrollPercent = Math.floor((original - 0) / (0.54 - 0) * 100);
    this.atTop = scrollTop === 0;
    this.atBottom = Math.floor(this.target.clientHeight + scrollTop) === scrollHeight;
    this.scrollCallback({
      event: e,
      scrollX: this.scrollX,
      scrollY: this.scrollY,
      scrollHeight: this.scrollHeight,
      scrollPercent: this.scrollPercent,
      atTop: this.atTop,
      atBottom: this.atBottom
    });
  };

  destroy = () => {
    this.target.removeEventListener('scroll', this.onScroll);
  };
}

/**
 * 转成烤串字符串
 * @param {*} string
 */
export function toKebabString(str = '') {
  const testA2Z = (s = '') => /[A-Z]/.test(s);
  let res = '';
  str.split('').forEach((s = '', i) => {
    if (testA2Z(s)) {
      res += `${i === 0 ? '' : str[i - 1] === '-' ? '' : '-'}${s.toLowerCase()}`;
    } else {
      res += s;
    }
  });
  return res;
}
