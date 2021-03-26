const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0;
    }
    let depth = 1;
    for (let i = 0; i < arr.length; i++) {
      let curDepth = this.calculateDepth(arr[i]) + 1;
      depth = Math.max(depth, curDepth);
    }
    return depth;
  }
};

// calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []]);

// Your task is to implement the class DepthCalculator with method calculateDepth
// that takes an array and returns its depth.

// calculateDepth method must pass the given array recursively. Depth of a flat array is 1.
// Method must correctly work with arrays that contain no elements or contain empty arrays.

// const depthCalc = new DepthCalculator();

// depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1

// depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2

// depthCalc.calculateDepth([[[]]]) => 3
