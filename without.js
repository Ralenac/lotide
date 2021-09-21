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


const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let i of source) {
    let item = true;
    for (let j of itemsToRemove) {
      if (i === j) { 
        item = false;
      }
    }
    if (item) { //only those elements from source that are not present in the itemsToRemove array
      result.push (i);
    }
  }

  return result;
};

module.exports = without;

// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case// Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


