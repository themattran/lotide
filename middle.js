
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

//assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));

const middle = function(array) { 
  const mid = array.length / 2; 
  if (array.length === 1 || array.length === 2) { 
    return [];
  }
  for (let i = 0 ; i < array.length; i++) {
    if (array.length % 2 === 1) {
      return (array[Math.floor(mid)]); 
    } else {
      return [
        array[mid -1],
        array[mid],
      ];
    }
  } 
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
