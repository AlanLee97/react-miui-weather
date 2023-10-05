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

/**
 * 滚动相关信息
 */
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
    this.isValidTarget = this.target && (this.target instanceof HTMLElement || this.target === window);
    this.instance = this;

    this.init();
  }

  init() {
    this.target.addEventListener('scroll', this.onScroll);
  }

  // eslint-disable-next-line class-methods-use-this
  scrollCallback = () => {};

  onScroll = (e) => {
    const { scrollTop, scrollHeight } = e.target || {};
    this.scrollHeight = scrollHeight;
    this.scrollY = scrollTop;
    const original = scrollTop / scrollHeight;
    // eslint-disable-next-line no-mixed-operators
    this.scrollPercent = Math.floor((original - 0) / (0.54 - 0) * 100);
    this.atTop = scrollTop === 0;
    this.atBottom = Math.floor(this.target.clientHeight + scrollTop) === scrollHeight;
    this.event = e;
    this.scrollCallback(this);
  };

  scrollToTop = () => {
    if (this.isValidTarget) {
      this.target.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  };

  scrollToBottom = () => {
    if (this.isValidTarget) {
      this.target.scrollTo({
        top: this.scrollHeight,
        left: 0,
        behavior: 'smooth'
      });
    }
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

export function nextTick(cb = () => {}) {
  return Promise.resolve().then(() => {
    cb();
  });
}
