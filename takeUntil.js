const takeUntil = function(array, callback) {
resultArray = []; 

for (let value of array) {
    if (callback(value) === true) { //checking condition if true of false (true meaning the function passed through come out as booleans - x => x < 0 for ex); if false return array
      return resultArray
    }
    resultArray.push(value)
  }
  return resultArray;
}




const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);



// checking with assertEqualArrays


const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        /* this will compare the same index from arrayOne && arrayTwo*/
        return false;
      } 
    }
  return true;
};

//console.log(eqArrays([1, 2, 3], [1, 2, 3]));


const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected) === true) {
  console.log(`Arrays are equal.`)
} else {
  console.log(`Arrays are not equal.`)
}
};


console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]))
console.log(assertArraysEqual(results2, [ 1, 2, 5, 7, 2 ]))