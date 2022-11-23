/**
 * @param {string} s
 * @return {string}
 */



var reverseWords = function (s) {
  res = s
    .trim()
    .split(' ')
    .filter((el) => el !== '')
    .reverse()
    .join(' ');

  return res;
};