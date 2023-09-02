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
