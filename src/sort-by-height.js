/**
 * Given an arr with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const ignoreIndxArr = [];
  const filteredArr = [];
  arr.forEach((item, i) => { item === -1 ? ignoreIndxArr.push(i) : filteredArr.push(item) });
  filteredArr.sort((a, b) => a - b);
  ignoreIndxArr.forEach(indx => { filteredArr.splice(indx, 0, -1) });
  return filteredArr;
}

module.exports = {
  sortByHeight
};
