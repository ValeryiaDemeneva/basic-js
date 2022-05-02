const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  'chain': [],
  getLength() {
      return this['chain'].length;
  },
  addLink(value) {
      if (value !== undefined) {
          this['chain'].push(`( ${value} )`);
      } else {
          this['chain'].push('()');

      }
      return this;
  },
  removeLink(position) {
      if (!Number.isInteger(position) || this['chain'][position - 1] === undefined) {
          this['chain'].length = 0;
          throw new Error('You can\'t remove incorrect link!');
      }
      this['chain'].splice(position - 1, 1);
      return this;
  },
  reverseChain() {
      this['chain'].reverse();
      return this;
  },
  finishChain() {
      let result = this['chain'].join('~~');
      this['chain'].length = 0;
      return result;
  },
};

module.exports = {
  chainMaker
};
