const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {

  constructor(reverse) {
      if (reverse === false) {
          this.isReverse = false;
      } else {
          this.isReverse = true;
      }
  }

  crypt(text, keyWord, size) {
      let key = keyWord.toLowerCase().split('').map(item => item.charCodeAt(0) - 97);
      let numFromKey = 0;
      let textEncrypted = text.split('')
          .map(letter => {
              let lowLetter = letter.toLowerCase();
              if (lowLetter.charCodeAt(0) <= 122 && lowLetter.charCodeAt(0) >= 97) {
                  return lowLetter.charCodeAt(0);
              }
              return letter;
          });
      let result = [];

      for (let letter of textEncrypted) {
          if (letter !== +letter) {
              result.push(letter);
              continue;
          }

          if (numFromKey === key.length) numFromKey = 0;

          let dif;
          if (size === 'decrypt') {
              dif = letter - key[numFromKey];
              if (dif < 97) {
                  dif = dif + 26;
              }
          }

          if (size === 'encrypt') {
              dif = letter + key[numFromKey];
              if (dif > 122) {
                  dif = dif - 26;
              }
          }

          numFromKey++;
          result.push(String.fromCharCode(dif).toUpperCase());
      }
      return result.join('');
  }

  encrypt(text, keyWord) {
      if(!(text && keyWord)) {
          throw new Error('Incorrect arguments!')
      }

      if (this.isReverse) {
          return this.crypt(text, keyWord, 'encrypt');
      }

      return this.crypt(text, keyWord, 'encrypt').split('').reverse().join('');
  }

  decrypt(text, keyWord) {
      if(!(text && keyWord)) {
          throw new Error('Incorrect arguments!')
      }

      if (this.isReverse) {
          return this.crypt(text, keyWord, 'decrypt');
      }

      return this.crypt(text, keyWord, 'decrypt').split('').reverse().join('');
  }
}


module.exports = {
  VigenereCipheringMachine
};
