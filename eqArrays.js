const assertEqual = require('./assertEqual');
  
  const eqArrays = function (arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) {
      return false;
    }

    for (let i of arrayOne) {
        if (arrayOne[i] !== arrayTwo[i]) {
          /* this will compare the same index from arrayOne && arrayTwo*/
          return false;
        } 
      }
    return true;
  };
  
//console.log(eqArrays([1, 2, 3], [1, 2, 3]));

module.exports = eqArrays; 

