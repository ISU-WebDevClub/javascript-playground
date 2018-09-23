/**
 * Variables
 */

var x = 1; // Old style, function scope

let y = 2; // New style, block scope
const z = 3;

console.log('After let y = 2, y is: ' + y);
y = 5;
console.log('After y = 5, y is: ' + y); // What is y?

console.log('After const z = 3, z is: ' + z);
//z = 6;
console.log('After z = 6, z is: ' + z); // z is still 3

/**
 * Control structures
 */

if ( 10 == "10") { // actually true and should be avoided unless desired
    console.log("This statement is true");
} else {
    console.log("This statement is false");
}

if ( 10 === "10") { //false as one would expect
    console.log("This statement is true");
} else {
    console.log("This statement is false");
}

// switch statements
let value = 2;
switch (value) {
    case 1:
        console.log("value is 1");
        break;
    case 2:
        console.log("value is 2");
        break;
    case 3:
        console.log("value is 3");
        break;
    case 4:
        console.log("value is 4");
        break;
    case 5:
        console.log("value is 5");
        break;
    case 6:
        console.log("value is 6");
        break;
    default:
        console.log("The value is not an integer in the range of 1 through 6");
}

//advanced control(ternary operator)
let someValue = (2 > 1 ? "the condition is true" : "the condition is false");
console.log(someValue);

/**
 * Functions
 */

function myFunction() {
    console.log("I am a function!");
}
myFunction();

let myFunction2 = () => {
    console.log("I am also a function!");
}
myFunction2();

let myFunction3 = (arg1,arg2) => {
    return arg1 + arg2;
}
console.log(myFunction3(10, 3));

// JavaScript is perfect for functional programming

const addTwo = (n) => { return n + 2; }
const list = [1, 2, 3];

const map = (func, arr) => {
  newArr = [];
  arr.forEach((num) => {
    newArr.push(func(num));
  });
  return newArr;
}

// It turns out that map is already built in to JavaScript

const numbers = [5, 10, 15];
console.log(numbers.map(x => x * 2)); // Multiply each element in array by two
console.log(numbers); // Original array is not changed

/**
 * Modifying the DOM
 */

let element = document.getElementById("subtitle");
//element.style.backgroundColor = "red";
element.innerHTML = "This is some new html inside an element";

/**
 * Sending and receiving data
 */

// free and open apis --> https://any-api.com/
// does not work if accessed locally as in file:// or c://
function getData(action, callback) {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
        //give the response back for use
        callback(xhr.responseText);
    }
    xhr.open("get", action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send();
}

getData("https://api.spotify.com/v1/albums", (data) => {
    console.log(data);
});

getData("https://swapi.co/api/people/1/", (data) => {
    console.log(data);
});

/**
 * Exports and imports
 */

import Dog from './module.js';
import { printAlphabet } from './module.js';

const puppy = new Dog(20, 50);

console.log(puppy.bark());
console.log(puppy.getDoggyInfo());
console.log(printAlphabet());

/*
Types of import statements:

import defaultExport from "module-name";
import * as name from "module-name";
import { export } from "module-name";
import { export as alias } from "module-name";
import { export1 , export2 } from "module-name";
import { foo , bar } from "module-name/path/to/specific/un-exported/file";
import { export1 , export2 as alias2 , [...] } from "module-name";
import defaultExport, { export [ , [...] ] } from "module-name";
import defaultExport, * as name from "module-name";
import "module-name";
var promise = import(module-name);
*/
