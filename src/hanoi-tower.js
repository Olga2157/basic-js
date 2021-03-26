const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turns = 0;
  let seconds = 0;
  let res = new Object();
  turns = Math.pow(2, disksNumber) - 1;
  seconds = Math.floor((turns / turnsSpeed) * 3600);
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
