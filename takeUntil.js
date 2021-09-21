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


const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
  }
};

const takeUntil = function(array, callback) {
  let result = [];
  for (let item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
}

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);

// const test1 = [ 1, 2, 5, 7, 2 ];
// const test2 = [ 'I\'ve', 'been', 'to', 'Hollywood' ];

// assertArraysEqual(results1, test1);
// assertArraysEqual(results2, test2);
