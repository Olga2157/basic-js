const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  let res = "";
  let innerRes = "";
  if (typeof options.separator === "boolean" || options.separator === null) {
    options.separator = String(options.separator);
  }
  if (typeof options.addition === "boolean" || options.addition === null) {
    options.addition = String(options.addition);
  }
  if (
    typeof options.additionSeparator === "boolean" ||
    options.additionSeparator === null
  ) {
    options.additionSeparator = String(options.additionSeparator);
  }
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.addition) {
    options.addition = "";
  }
  if (options.additionRepeatTimes) {
    for (let i = 0; i < options.additionRepeatTimes - 1; i++) {
      innerRes = innerRes + options.addition + options.additionSeparator;
    }
    innerRes = innerRes + options.addition;
  } else {
    innerRes = innerRes + options.addition;
  }
  if (options.repeatTimes) {
    for (let j = 0; j < options.repeatTimes - 1; j++) {
      res = res + str + innerRes + options.separator;
    }
    res = res + str + innerRes;
  } else {
    res = res + str + innerRes;
  }

  return res;

  // if (typeof repeatTimes = Number && typeof additionRepeatTimes = Number) {
  // }
};
// For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS',
// additionRepeatTimes: 3, additionSeparator: '00' })
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'

// task is to implement the function repeater(str, options). This function returns a repeating string based on the given parameters:

// str is a string to repeat;
// options is an object of options, that contains properties:
// repeatTimes sets the number of repetitions of the str;
// separator is a string separating repetitions of the str;
// addition is an additional string that will be added to each repetition of the str;
// additionRepeatTimes sets the number of repetitions of the addition;
// additionSeparator is a string separating repetitions of the addition.
// The str and addition parameters are strings by default.
// In case when type of these parameters is different, they must be converted to a string.

// separator and additionSeparator parameters are strings.

// repeatTimes and additionRepeatTimes are integer numbers
// (in the absence of any of them, the corresponding string is not repeated).

// The only indispensable parameter is str, any others may be not defined.
// separator default value is '+'. additionSeparator default value is '|'.

// For example: repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS',
// additionRepeatTimes: 3, additionSeparator: '00' })
// => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
