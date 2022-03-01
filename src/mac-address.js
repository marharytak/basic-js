/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  if (n.split('-').length !== 6) { return false; }
  return n.split('-').every(item => /([0-9]{2}|[A-F]{2}|[0-9]{1}[A-F]{1}|[A-F]{1}[0-9]{1})/.test(item));
}
module.exports = {
  isMAC48Address
};
