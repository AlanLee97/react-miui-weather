import { className, nextTick } from '.';

const registerList = [
  className,
  nextTick
];

registerList.forEach(fn => {
  window[`$${fn.name}`] = fn;
});

window.$register = function(name, fn = () => {}) {
  window[`$${name || fn.name}`] = fn;
};
