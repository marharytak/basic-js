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
  constructor(mode = true) {
    this.mode = mode;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key, decrypt = false) {
    if (!message || !key) { throw Error('Incorrect arguments!'); }

    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();

    let i = 0;
    for (let letter of message) {
      if (this.alphabet.includes(letter)) {
        const keyCode = key[i % key.length].charCodeAt(0) - 65;
        const letterCode = decrypt
          ? letter.charCodeAt(0) - keyCode + 65
          : letter.charCodeAt(0) + keyCode - 65;
        letter = String.fromCharCode(letterCode % 26 + 65);
        i++;
      }

      res += letter;
    }

    return this.mode ? res : res.split('').reverse().join('');
  }

  decrypt(message, key) {
    return this.encrypt(message, key, true);
  }
}

module.exports = {
  VigenereCipheringMachine
};
