const assertArraysEqual = function(array1, array2){
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
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

// const countLetters = function(string) {
//   let result = {};
//   string = string.replace(' ', '');
//   for (let letters of string) {
//     if (!result[letters]) {
//       result[letters] = 1;
//     } else {
//       result[letters] ++;
//     }
//   } 
//   return result;
// };

const letterPositions = function(sentence) {
  const results = {};
  let newSentence = sentence.replace(' ', '')
    for (let i = 0; i < newSentence.length; i++) {
      if (!results[newSentence[i]]) //if there is not letter 
        results[newSentence[i]] = [i];
      else
        results[newSentence[i]].push(i); //need push since you creating arrays
    }
    return results;
  };
  
  module.exports = letterPositions;

// // console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
// // console.log(letterPositions("lighthouse in the house"));
// assertArraysEqual(letterPositions("lighthouse in the house").t, [4, 13]);
// assertArraysEqual(letterPositions("lighthouse in the house").o, [6, 18]);