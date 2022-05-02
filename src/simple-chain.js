/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  separator: '~~',
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number') { this.throwError(); }
    if (position - 1 < 0 || position - 1 >= this.getLength()) { this.throwError(); }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join(this.separator);
    this.chain = [];
    return result;
  },
  throwError() {
    this.chain = [];
    throw new Error('You can\'t remove incorrect link!');
  }
};

module.exports = {
  chainMaker
};
