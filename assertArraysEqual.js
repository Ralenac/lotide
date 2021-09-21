// const eqArrays = function(actual,expected) {
//   if(actual.length !== expected.length) { //first check the number of elements
//     return false
//   }
//   for (let i = 0; i < actual.length; i++) { //you can loop only through one array
//     if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
//       if (!eqArrays(array1[i],array2[i])) {
//         return false;
//       }
//     } else if (actual[i] !== expected[i]) { //the items are not equal
//       return false;
//     }
//   }
//   return true;
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