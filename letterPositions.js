const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual'); 



const letterPositions = function(string) {
  const results = {}; 
  let index = -1;
  
  for (let letter of string) {
    index++
    if (letter !== " ") {
      if (!results[letter]) {
        results[letter] = []
        results[letter].push(index)
        //results[letter].push(string.indexOf(letter))
      } else {
        // console.log(results[letter])
        results[letter].push(index); 
      }
    }
  }
  return results; 
}

module.exports = letterPositions; 

