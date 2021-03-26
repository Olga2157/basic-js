const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let res = 0;
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j <row.length; j++) {
      if (row[j] === "^^") {
        res++;
      }
    }
  }
  return res;
};