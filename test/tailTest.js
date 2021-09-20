const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [6,7] for [5,6,7]", () => {
    assert.deepEqual(tail([5,6,7]), [6,7]);
  });
  it("returns empty Array for empty Array or Array with one element", () => {
    assert.deepEqual(tail(['yo yo']), []);
  });
});

//npm test test/tailTest.js



// const assertEqual = require ('../assertEqual');
// const tail = require('../tail');

// //TEST CODE
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]);

// const result2 = ["yo yo"];
// console.log(tail(result2));
// assertEqual(result2.length,1); 

// node test/tailTest.js