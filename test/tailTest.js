const assertEqual = require ('../assertEqual');
const tail = require('../tail');

//TEST CODE
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]);

const result2 = ["yo yo"];
console.log(tail(result2));
assertEqual(result2.length,1); 

// node test/tailTest.js