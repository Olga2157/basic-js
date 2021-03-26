const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!members) {
    return false;
  }
  // проверка на не null
  let array = new Array();
  let res = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      let currentMember = members[i].trim();
      array.push(currentMember[0].toUpperCase());
    }
  }
  array = array.sort();

  res = array.join("");
  if (res) {
    return res;
  } else {
    return false;
  }
};

// typeof str; // returns string

// var fruit = ['арбузы', 'бананы', 'Вишня'];
// fruit.sort(); // ['Вишня', 'арбузы', 'бананы']

// "sad"[0] = "s"

// .trim() - Метод trim() удаляет пробельные символы с начала и конца строки.
