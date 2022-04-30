/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  for (let i = 0; i < matrix.length; i++) {
    res.push(Array(matrix[0].length).fill(0));
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix.length; col++) {
      const topRow = matrix[row - 1];
      const bottomRow = matrix[row + 1];

      if (topRow || bottomRow) {
        const currentRow = topRow ? topRow : bottomRow;
        if (currentRow[col] || currentRow[col - 1] || currentRow[col + 1]) {
          res[row][col]++;
        }
      }

      if (matrix[row][col - 1] || matrix[row][col + 1]) {
        res[row][col]++;
      }
    }
  }
  return res;
}

module.exports = {
  minesweeper
};

