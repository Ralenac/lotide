// const eqArrays = function(actual, expected){
//   if (JSON.stringify(actual) !== JSON.stringify(expected)) {
//     return false;
//   } else {
//     return true;
//   }
// }; 

const eqArrays = require('./eqArrays'); //pay attention to dots!!!! only one in same directory

const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
  }
};

module.exports = assertArraysEqual;

// assertArraysEqual([1, 2, 3], [1, 2, 3]);