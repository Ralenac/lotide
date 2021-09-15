const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

};

const countLetters = function(string) {
  let result = {};
  string = string.replace(' ', '');
  for (let letters of string) {
    if (!result[letters]) {
      result[letters] = 1;
    } else {
      result[letters] ++;
    }
  } 
  return result;
};


assertEqual(countLetters("lighthouse in the house"))