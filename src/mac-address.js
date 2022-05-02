const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
 function isMAC48Address(n) {
  let check = n.split('-');
  if (check.length !== 6) return false;
  check.forEach(item => {
      if (item.length !== 2) return false;
  });

  return check.join('').split('').every(letter => {
      if (Number.isInteger(+letter)) return true
      if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 70 ) return true;
  })
}
module.exports = {
  isMAC48Address
};
