/*
56. Create simple Node.JS module that has one object with three functions:

- `findFromArray(array, value)` - returns boolean if value was found from the array
- `findMin(array)` - returns minimum value from the array
- `findMax(array)` - returns maximum value from the array

Export the object and use it from other js file. So in the end you should have two files 1) index.js and 2) mymodule.js. The first will require the second one and uses the functions.
*/


/**
 * returns boolean if value was found from the array
 * @param {array} array the array to find from
 * @param {value} teuw if value was found
 * @return true if value was found, otherwise returns false
 */

var MyUtils = {
  finditem: function findFromArray(array, value){
    
    for (item in array){
      if(value == array[item])
      return true;
    }

    return false;
  },

  // returns minimum value from the array
  minItem: function findMin(array){
    if(array.length > 0){
      for(item in Array){
        if
      }
      let minValue = array[0];
      for(item in array){
        if(array[item] < minValue)
          minValue = array[item];
      }
      return minValue;
    }
    return NaN;

  },

  // returns max value from the array
  maxitem: function findMax(array){
    if(array.length > 0){
      
      let maxValue = array[0];
      for(item in array){
        if(array[item] > maxValue)
          maxValue = array[item];
      }
      return maxValue;
  }
  return NaN;

  }
};

return module.exports = MyUtils;

