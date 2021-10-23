
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


const assertArraysEqual = function (input) {
  if (input === true) {
    console.log(`This is true.`)
  } else {
    console.log(`This is false.`)
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

// eqArrays([1, 2, 3], [1, 2, 3]) // => true
  
// eqArrays([1, 2, 3], [1, 2, 3]);
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false