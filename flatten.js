const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual'); 


const  flatten = function (sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) { 
    if (Array.isArray(sourceArray[i])) { 
      result = result.concat(flatten(sourceArray[i])); 
    } else {
      result.push(sourceArray[i]); 
    }
  }
  return result;
}

module.exports = flatten; 

