// Variables

var x = 1; // Old style, function scope

let y = 2; // New style, block scope
const z = 3;

console.log('After let y = 2, y is: ' + y);
y = 5;
console.log('After y = 5, y is: ' + y); // What is y?

console.log('After const z = 3, z is: ' + z);
z = 6;
console.log('After z = 6, z is: ' + z); // z is still 3

// Control structures

// Functions

// Modifying the DOM

// Sending and receiving data
