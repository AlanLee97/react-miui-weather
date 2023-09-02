import { className } from '.';

const registerList = [className];

registerList.forEach(fn => {
  window[`$${fn.name}`] = fn;
});
