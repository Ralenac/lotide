// const assertEqual = function(actual, expected){
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// };

const eqArrays = function(actual,expected) {
  if(actual.length !== expected.length) { //first check the number of elements
    return false
  }
  for (let i = 0; i < actual.length; i++) { //you can loop only through one array
    if (Array.isArray(actual[i]) && Array.isArray(expected[i])) {
      if (!eqArrays(array1[i],array2[i])) {
        return false;
      }
    } else if (actual[i] !== expected[i]) { //the items are not equal
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

//TEST CODE

// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); 
// assertEqual(eqArrays(["1", "2"], ["1", "2", 3]), false);
// assertEqual(eqArrays([], []), false);