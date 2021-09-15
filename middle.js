const eqArrays = function(actual, expected) {
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
}; 

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
  }
};

const middle = function(array) {
  let emptyArray = [];
  let odd = array[Math.floor((array.length - 1) / 2)];
  let even = array[Math.floor((array.length / 2))];
  if (array.length <= 2) {
    return emptyArray;
  }
  if (array.length % 2 === 0) {
    emptyArray.push(odd, even);
  } else {
    emptyArray.push(odd);
  }
  return emptyArray;
};




assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([5, 7, 8, 9]), [7, 8]);

