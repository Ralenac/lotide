const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let index of Object.keys(object1)) { 
      if(Array.isArray(object1[index]) && Array.isArray(object2[index])) { 
        if (eqArrays(object1[index],object2[index]) === false) {
          return false;
        } 
      } else {
        if(object1[index] !== object2[index]) { 
          return false;
        }
      }
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅  Assertion Passed: ${inspect(actual)} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

//TEST CODE

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertObjectsEqual(eqObjects(ab, ba), true); //true

// const abc = { a: "1", b: "2", c: "3" };
// assertObjectsEqual(eqObjects(ab, abc), false); //false