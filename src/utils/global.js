import { className, nextTick } from '@alanlee97/utils';

const registerList = [
  {
    name: 'className',
    fn: className
  },
  {
    name: 'nextTick',
    fn: nextTick
  }
];

registerList.forEach(fn => {
  window[`$${fn.name}`] = fn.fn;
});

window.$register = function(name, fn = () => {}) {
  window[`$${name || fn.name}`] = fn;
};
