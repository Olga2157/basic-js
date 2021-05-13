const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (
    !sampleActivity ||
    typeof sampleActivity !== "string" ||
    sampleActivity === " " ||
    sampleActivity > 15 ||
    sampleActivity < 1
  ) {
    return false;
  }
  
  let sampleActivityNumber = Number.parseInt(sampleActivity);
  if (isNaN(sampleActivityNumber)) {
    return false;
  }
  let rateConstant = 0.693 / HALF_LIFE_PERIOD;
  let age = Math.log(MODERN_ACTIVITY / sampleActivity) / rateConstant;
//   ceil - округляет в верхнюю-большую сторону
  return Math.ceil(age);
};

// Your task is to implement the function dateSample(sampleActivity) that calculates sample approximate age (in years).
// Please use given MODERN_ACTIVITY and HALF_LIFE_PERIOD.

// Function parameter sampleActivity is a string. Calculated sample age must be number.

// Age must be integer. Age must be rounded up (ceiling).
// In case of wrong input parameter type or inadequate activity value or absence of argument
// function must return false.

// You can use the formula from the article at the link: t = (ln(N0/N) / k)
// k = rateConstant : HALF_LIFE_PERIOD = ln2 / k => k = ln2 / HALF_LIFE_PERIOD
// 0.693 is an approximation of the natural logarithm of two.

// For example:
// dateSample('1') => 22387 (or 22392 depending on formula used)
// dateSample('WOOT!') => false
