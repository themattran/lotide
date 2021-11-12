const assertEqual = require('./assertEqual');
  
  const eqArrays = function (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }

    for (let i of arrayOne) {
        if (arrayOne[i] !== arrayTwo[i]) {
          return false;
        } 
      }
    return true;
  };
  


module.exports = eqArrays; 

