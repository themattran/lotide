const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual'); 


const map = function(array, callback) {
  
  const results = [];
  for (let item of array) {
    results.push(callback(item))
  }
  return results;
};


module.exports = map; 


map(words, word => word[0]); 
const words = ["ground", "control", "to", "major", "tom"];





