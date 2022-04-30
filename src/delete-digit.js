/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const str = n.toString();
  let max = Number(str.substring(0, str.length - 1));

  for (let i = 1; i < str.length; i++) {
    let curr = Number(str.substring(0, i - 1) + str.substring(i));
    if (curr > max) { max = curr; }
  }

  return max;
}

module.exports = {
  deleteDigit
};