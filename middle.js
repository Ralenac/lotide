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

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

const middle = function(array) {
  let emptyArray = [];
  let oddNumber = array[Math.floor((array.length - 1) / 2)];
  let evenNumber = array[Math.floor((array.length / 2))];
  if (array.length <= 2) {
    return emptyArray;
  }
  if (array.length % 2 === 0) {
    emptyArray.push(oddNumber, evenNumber);
  } else {
    emptyArray.push(oddNumber);
  }
  return emptyArray;
};

module.exports = middle;

//TEST CODE
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([5, 7, 8, 9]), [7, 8]);

