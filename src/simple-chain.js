const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    this.chainArray.push(value);
    return this;
  },
  removeLink(position) {
    if (position < 0 || position > this.chainArray.length) {
      this.chainArray = [];
      throw new Error();
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray = this.chainArray.reverse();
    return this;
  },
  finishChain() {
    if (this.chainArray.length === 0) {
      return "";
    }
    let res = "( ";
    for (let i = 0; i < this.chainArray.length - 1; i++) {
      res = res + this.chainArray[i] + " )~~( ";
    }
    res = res + this.chainArray[this.chainArray.length - 1] + " )";
    this.chainArray = [];
    return res;
  },
};

module.exports = chainMaker;

// getLength returns the current chain length as a number;
// addLink(value) adds a link containing a string representation of the value to the chain;
// removeLink(position) removes a chain link in the specified position;
// reverseChain reverses the chain;
// finishChain ends the chain and returns it.
