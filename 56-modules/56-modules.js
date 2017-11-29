/*
56. Create simple Node.JS module that has one object with three functions:

- `findFromArray(array, value)` - returns boolean if value was found from the array
- `findMin(array)` - returns minimum value from the array
- `findMax(array)` - returns maximum value from the array

Export the object and use it from other js file. So in the end you should have two files 1) index.js and 2) mymodule.js. The first will require the second one and uses the functions.
*/

//returns boolean if value was found from the array

// haetaan MyUtils moduulin sisältö olioon myUtils
var myUtils = require('./MyUtils.js');

// etsitään löytyykö taulukosta arvo 4 -> true
console.log(myUtils.finditem([1,2,3,4,5], 4));

// Haetaan taulukon pienin -> 1
console.log(myUtils.minItem([1,3,5,2,7]));

// HAetaan taulukon suurin -> 12
console.log(myUtils.maxitem([1,4,8,12,2]));

// Tyhjä -> palauttaa NaN
console.log(myUtils.maxitem([]));

