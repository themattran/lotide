
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


const  flatten = function (sourceArray) {
  let result = [];
  for (let i = 0; i < sourceArray.length; i++) { 
    if (Array.isArray(sourceArray[i])) { //Checking if current index is an array e.g. [3, 4] & [6]
      result = result.concat(flatten(sourceArray[i])); // join the called function's values into a single string into result
      //console.log(flatten(sourceArray[i])); => [3, 4] & [6]
    } else {
      result.push(sourceArray[i]); // will push element of sourceArray to result
    }
  }
  return result;
}


console.log(flatten([1, 2, [3, 4], 5, [6]])); 