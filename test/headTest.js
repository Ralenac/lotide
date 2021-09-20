const assertEqual = require ('../assertEqual');
const head = require('../head');

//TEST CODE
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([5,6,7]), 8);
assertEqual(head([]), 5);

// node test/headTest.js