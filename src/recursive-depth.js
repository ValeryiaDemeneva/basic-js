const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  calculateDepth(arr, isFirstStart) {
      if (!isFirstStart) {
          this.max = 0;
          this.count = 1;
      }

      for (let item of arr) {
          if (Array.isArray(item)) {
              this.count++;
              this.calculateDepth(item, true);
          }
      }
      if (this.count > this.max) this.max = this.count;
      this.count--;

      return this.max;
  }
}

module.exports = {
  DepthCalculator
};
