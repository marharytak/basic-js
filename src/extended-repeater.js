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

  if (options.hasOwnProperty('addition')) {
    str += (options.addition + (options.additionSeparator ? options.additionSeparator : '|'))
      .repeat(options.additionRepeatTimes - 1) + options.addition;
  }

  return (str + (options.separator ? options.separator : '+')).repeat(options.repeatTimes - 1) + str;
}

module.exports = {
  repeater
};