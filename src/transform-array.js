const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error();
  }
  let arrNew = new Array();
  let doubleNext = false;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        i++;
        break;
      case "--discard-prev":
        if (!(i > 1 && arr[i - 2] === "--discard-next")) {
          // проверка случая когда  недавно сделали --discard-next, например input: [1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5], output: [1, 2, 3, 4, 5]
          arrNew.pop(); //удаляет последнее значение
        }
        break;
      case "--double-next":
        doubleNext = true;
        break;
      case "--double-prev":
        if (arrNew.length > 0 && !(i > 1 && arr[i - 2] === "--discard-next")) {
          arrNew.push(arr[i - 1]); // проверка случая когда --double-prev - первый элемент
        }
        break;
      default:
        if (doubleNext) {
          arrNew.push(arr[i]);
          doubleNext = false; // создаем дубль и обнуляляем задубливание
        }
        arrNew.push(arr[i]);
    }
  }
  return arrNew;
};

// --discard-next excludes the next element of the array from the transformed array.
// --discard-prev excludes the previous element of the array from the transformed array.
// --double-next doubles the next element of the array in the transformed array.
// --double-prev doubles the previous element of the array in the transformed array.
