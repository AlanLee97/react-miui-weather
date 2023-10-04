import { className } from '.';

const registerList = [className];

registerList.forEach(fn => {
  window[`$${fn.name}`] = fn;
});

window.$register = function(name, fn = () => {}) {
  window[`$${name || fn.name}`] = fn;
};
