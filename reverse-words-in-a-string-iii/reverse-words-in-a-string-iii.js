/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  const res = s
    .split(' ')
    .map((it) => it.split('').reverse().join(''))
    .join(' ');

  return res;
};