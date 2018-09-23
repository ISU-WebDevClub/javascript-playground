export default class Dog {
  constructor(height, weight) {
    this.height = height;
    this.weight = weight;
  }

  bark() {
    console.log('Woof!');
  }

  getDoggyInfo() {
    console.log('This dog has height ' + this.height + ' and weight ' + this.weight);
  }
}

export function printAlphabet() {
  console.log('abcdefghijklmnopqrstuvwxyz');
}
