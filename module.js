export default class Dog {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  bark() {
    return 'Woof!';
  }

  getDoggyInfo() {
    return 'This dog has height ' + this.height + ' and weight ' + this.weight;
  }
}

export function printAlphabet() {
  return 'abcdefghijklmnopqrstuvwxyz';
}
