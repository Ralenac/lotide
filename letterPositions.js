
// const assertArraysEqual = function(array1, array2){
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅  Assertion Passed: ${array1} === ${array2}`);
//   } else {
//     console.log(`🛑🛑🛑  Assertion Failed: ${array1} !== ${array2}`);
//   }
// };

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
  sentence = sentence.replace(' ', '')
    for (let i = 0; i < sentence.length; i++) {
      if (!results[sentence[i]])
        results[sentence[i]] = [i];
      else
        results[sentence[i]].push(i);
    }
    return results;
  };
  


console.log(letterPositions("hello"));
console.log(letterPositions("lighthouse in the house"));
