const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

//TEST CODE
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([5, 7, 8, 9]), [7, 8]);

// node test/middleTest.js