/*
49. By using `Object.defineProperty` create an jack-object that has only `age` - property. 
This property is only accessed by set and get methods. Implement validation for the set method. 
Create the object in separate function and return it:

  var jack = createObject();
    jack.age = 50         // setter
    console.log(jack.age) // getter
*/

function createPerson(){
  let object = {};
  
  let  privateAge = 0;

  Object.defineProperty( object, 'age', { 
    //value: "Hessu",  // Notice: you cannot have value and get + set 
    get: function(){return privateAge}, 
    set: function(value) {
        if(value >= 0){
          privateAge = value;
        }
        else{
          throw new TypeError('give positive integer as age')
        }
      }, 
    //writable: true,   // property cannot be changed 
    enumerable: true,    
    // will be iterated in for in 
    configurable: true // can be deleted 
  });
  return object; 
}

var jack = createPerson();
jack.age = 30; // setter
console.log(jack.age); // getter
