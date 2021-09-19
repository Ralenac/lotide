const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function (actual, expected){
  if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    return false;
  } else {
    return true;
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  } else {
    for (let index of Object.keys(object1)) { //need to loop through keys (array) !!not objects(object1)
      if(Array.isArray(object1[index]) && Array.isArray(object2[index])) { //se Array.isArray against both values to see if array comparisons need to be made (If both values are indeed arrays: pass them to eqArrays and ensure that it returns true.)
        if (eqArrays(object1[index],object2[index]) === false) {
          return false;
        } 
      } else {
        if(object1[index] !== object2[index]) { //compare keys of two different objects
          return false;
        }
      }
    }
    return true;
  }
};

const bca = { a: "1", b: "2", c: "3"};
const cba = { a: "1", b: "2", c: "4"};
assertEqual(eqObjects(bca, cba), false); //false

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); //true

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false); //false

// //step 4
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
