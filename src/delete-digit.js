const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let max = 0
  let numDivide = n.toString().split('').map(item => +item)

  for(let i = 0; i < numDivide.length; i++) {
    let arr = [].concat(numDivide)
    arr.splice(i, 1)
    if(+arr.join('') > max) max = +arr.join('')
  }

  return max
}

module.exports = {
  deleteDigit
};
