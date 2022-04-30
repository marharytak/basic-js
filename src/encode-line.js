/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 1;
  let res = '';
  str = str.split('');
  str.forEach((char, index) => {
    if (char === str[index + 1]) {
      counter++;
    } else {
      res += counter > 1 ? `${counter}${char}` : char;
      counter = 1;
    }
  });
  return res;
}

module.exports = {
  encodeLine
};
