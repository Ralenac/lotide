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

module.exports = countLetters;

//TEST CODE
// console.log(countLetters("lighthouse in the house")) //(output ->  {l: 1,
  // i: 2,
  // g: 1,
  // h: 4,
  // t: 2,
  // o: 2,
  // u: 2,
  // s: 2,
  // e: 3,
  // n: 1,)
  //}

// const test = countLetters("lighthouse in the house");
// assertEqual(test["l"], 1);
// assertEqual(test["i"], 2);
// assertEqual(test["g"], 1);
// assertEqual(test["h"], 4);
// assertEqual(test["t"], 2);
// assertEqual(test["o"], 2);
// assertEqual(test["u"], 2);
// assertEqual(test["s"], 2);
// assertEqual(test["e"], 3);
// assertEqual(test["n"], 1);




