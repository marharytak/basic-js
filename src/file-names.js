/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names, k = 0) {
  for (let i = 1; i < names.length; i++) {
    const numOfMatches = [...names].slice(0, i).filter(x => x === names[i]).length;
    if (numOfMatches >= 1) {
      names[i] = k === 0 ? `${names[i]}(1)` : `${names[i].slice(0, names[i].length - 3)}(${numOfMatches + 1})`
    }
  }
  return [...new Set(names)].length === names.length ? names : renameFiles(names, k + 1);
}

module.exports = {
  renameFiles
};
