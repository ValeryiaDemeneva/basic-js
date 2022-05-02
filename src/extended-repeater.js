const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let add = ''
  let result = '' + str;

  function repeatAdd(str, quantity, separator = '|') {
    let string = '' + str
    let result = []
    for(let i = 0; i < quantity; i++) {
      result.push(string)
    }
    return result.join(separator)
  }
  function repeat(str, quantity, separator = '+') {
    let string = '' + str
    let result = []
    for(let i = 0; i < quantity; i++) {
      result.push(string)
    }
    return result.join(separator)
  }

  if(options.additionRepeatTimes) {
    add = repeatAdd(options.addition, options.additionRepeatTimes, options.additionSeparator )
  } else if(options.addition) {
    result += options.addition
  }

  if(options.repeatTimes) {
    result = repeat(result + add, options.repeatTimes, options.separator)
  }

  return result
}

module.exports = {
  repeater
};
