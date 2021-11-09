const eqArrays = require('./eqArrays'); 
const assertArraysEqual = require('./assertArraysEqual');


const middle = function(array) { 
  const mid = array.length / 2; 
  if (array.length === 1 || array.length === 2) { 
    return [];
  }
  for (let i = 0 ; i < array.length; i++) {
    if (array.length % 2 === 1) {
      return [array[Math.floor(mid)]]; 
    } else {
      return [
        array[mid -1],
        array[mid],
      ];
    }
  } 
};

module.exports = middle; 