const assertArraysEqual = require('../assertArraysEqual'); //we don't need require eqArrays since we are using only assertArraysEqual function

//TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

// node test/assertArraysEqualTest.js