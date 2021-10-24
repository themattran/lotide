
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


const without = function (sourceArray, itemsToRemove) {
  let resultArray = sourceArray; //Stored OG array in new variable so changes to new variable doesn't affect OG array 
  for(let i = 0; i < sourceArray.length; i++){
    for(let k = 0; k < itemsToRemove.length; k++){ //Used nested for loops since we are comparing TWO ARRAYS
      if(sourceArray[i] === itemsToRemove[k]){ 
        resultArray.splice(i,1); //splice at index and only at index
      }
    }
    
  }
  return resultArray; // return new array 
};



const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
//Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);


