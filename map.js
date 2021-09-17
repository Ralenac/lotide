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

const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  // console.log('item BEFORE: ', item);
  // console.log('item AFTER: ', callback(item));
  // console.log('---');
  }
  return results;
};


const results1 = map(words, word => word[0]);
console.log(assertArraysEqual((results1), [ 'g', 'c', 't', 'm', 't' ]));
