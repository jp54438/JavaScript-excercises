/*
48. Create some object and try out  (see slides #141)
- Make some property non-enumerable and try it out in `for in`
- Add non-writable property and try to change values
- Try out `Object.seal` and `Object.freeze`. What is the difference? Test

Object could be for example and then you use `Object.defineProperty` to create the properties
*/

var myObject = {}

Object.defineProperty( myObject, "name", { 
  value: "Hessu",  // Notice: you cannot have value and get + set 
  //get: someFunction, 
  //set: someOtherFunction, 
  writable: false,   // property cannot be changed 
  enumerable: false,    
  // will be iterated in for in 
  configurable: true // can be deleted 
});

// Ei looppaa ja tulosta jos enumerable = false;
console.log("ennen for in")
for(key in myObject){
  console.log(myObject[key]);
}
console.log("for in jälkeen")

// Koska writable=false, name arvo ei muutu
myObject.name = "hessu";


// Object.seal -testi. Arvoa ei voi poistaa tai lisätä, mutta muuttaa voi. 
var myObject2 = {}

Object.defineProperty( myObject2, "name", { 
  value: "Hessu",  // Notice: you cannot have value and get + set 
  //get: someFunction, 
  //set: someOtherFunction, 
  writable: true,   // property cannot be changed 
  enumerable: true,    
  // will be iterated in for in 
  configurable: true // can be deleted 
});

console.log("###################");

Object.seal(myObject2);
delete myObject2["name"];
console.log(myObject2["name"]);

myObject2.id = "1001";
console.log(myObject2["id"]);

myObject2.name="Hessu Hopo"
console.log(myObject2["name"])






