const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
  it("returns 6 for [5,6,7]", () => {
    assert.deepEqual(middle([5,6,7]), [6]);
  });
  it("returns empty Array for empty Array or Array with less or equal to 2 elements", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns empty Array for empty Array or Array with less or equal to 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
});

//npm test test/middleTest.js


// const assertArraysEqual = require('../assertArraysEqual');
// const middle = require('../middle');

// //TEST CODE
// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);
// assertArraysEqual(middle([1, 2, 3]), [2]);
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
// assertArraysEqual(middle([5, 7, 8, 9]), [7, 8]);

// node test/middleTest.js