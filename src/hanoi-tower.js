const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let seconds = 0;
  let res = new Object();
  turns = Math.pow(2, disksNumber) - 1;
//  Formula was used from: https://en.wikipedia.org/wiki/Tower_of_Hanoi
//   The minimal number of moves required to solve a Tower of Hanoi puzzle is 2n − 1, where n is the number of disks.
  seconds = Math.floor((turns / turnsSpeed) * 3600);
//   записываем результаты в свойства объекта:
  res.turns = turns;
  res.seconds = seconds;
  return res;
};

// our task is much easier than coming up with an algorithm that solves this puzzle :)
// Implement the function calculateHanoi that accepts diskNumber and turnsSpeed parameters.
// diskNumber is a number of disks and turnsSpeed is the speed of moving discs (in turns per hour). Both parameters are numbers.

// calculateHanoi function returns an object with 2 properties:

// turns (minimum number of turns to solve the puzzle)
// seconds (minimum number of seconds to solve the puzzle at a given turnsSpeed, seconds must be an integer, obtained from rounded down (floor) calculation result)
