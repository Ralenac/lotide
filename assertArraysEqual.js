const eqArrays = function(actual, expected){
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
}; 
const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
  }
};
assertArraysEqual([1, 2, 3], [1, 2, 3]);