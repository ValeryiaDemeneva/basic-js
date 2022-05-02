const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [].concat(arr);

  for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
          case '--discard-next':
              result[i] = result[i + 1] = undefined;
              break;
          case '--discard-prev':
              result[i] = result[i - 1] = undefined;
              break;
          case '--double-next':
              result[i] = result[i + 1]
              break;
          case '--double-prev':
              result[i] = result[i - 1]
              break;
      }
  }

  return result.filter(item => item !== undefined);
}

module.exports = {
  transform
};
