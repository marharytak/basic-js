/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */

function getSumOfDigits(n, sum = 0) {
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    sum += +n[i];
  }
  return `${sum}`.length > 1
    ? getSumOfDigits(sum)
    : sum;
}

module.exports = {
  getSumOfDigits
};
