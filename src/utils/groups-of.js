module.exports = (arr = [], n) => {
  const ret = [];
  let group = [];

  for (let i = 0; i < arr.length; ++i) {
    group.push(arr[i]);
    if ((i + 1) % n == 0) {
      ret.push(group);
      group = [];
    }
  }

  if (group.length) {
    ret.push(group);
  }

  return ret;
};
