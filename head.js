// FUNCTION IMPLEMENTATION
// assertEqual was used before refactoring!
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

// const assertEqual = require('./assertEqual'); (in this file you don't need assertEqual because you will require this function in headTest.js)

let head = function (array) {
  if (array.length === 0) {
    return undefined
  } else {
    return array [0]
  }
};

module.exports = head;

//TEST CODE
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([5,6,7]), 8);
// assertEqual(head([]), 5);
