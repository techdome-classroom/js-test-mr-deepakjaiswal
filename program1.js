const getTotalIsles = function (grid) {
  function check(row, col) {
    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      map[row][col] !== "L"
    ) {
      return;
    }
    map[row][col] = "V";
    check(row + 1, col);
    check(row - 1, col);
    check(row, col + 1);
    check(row, col - 1);
  }

  const rows = map.length;
  const cols = map[0].length;
  let distinctIslands = 0;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (map[i][j] === "L") {
        distinctIslands++;
        check(i, j);
      }
    }
  }
  return distinctIslands;
};
console.log("Number of distinct islands:", getTotalIsles(grid));
module.exports = getTotalIsles;
