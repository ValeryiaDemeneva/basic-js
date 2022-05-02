const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function getDNSStats(domains) {
  let obj = {};
  domains.map(url => {
    let bitUrl = url.split('.').reverse()
    let dom  = ''
    for (let i = 0; i < bitUrl.length; i++) {
      dom += `.${bitUrl[i]}`
      if(obj.hasOwnProperty(dom)) {
        ++obj[dom]
        continue
      }
      obj[dom] = 1
    }
  })
  return obj
}

module.exports = {
  getDNSStats
};
