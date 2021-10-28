const words = ["ground", "control", "to", "major", "tom"];


const map = function(array, callback) {

  const results = [];
for (let item of array) {
  // console.log('item BEFORE: ', item); 
  // console.log('item AFTER: ', callback(item)); 
  // console.log('---');
  results.push(callback(item))
}
  return results;
};

const results1 = map(words, word => word[0]); 
console.log(results1)


// This functions test if two arrays are equal
const eqArrays = function (arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }

  for (let i = 0; i < arrayOne.length; i++) {
      if (arrayOne[i] !== arrayTwo[i]) {
        /* this will compare the values of same index from arrayOne && arrayTwo*/
        return false;
      } 
    }
  return true;
};//console.log(eqArrays([1, 2, 3], [1, 2, 3]));

//This function prints array is =/!= based on results of eqArrays()
const assertArraysEqual = function (actual, expected) {

  if (eqArrays(actual, expected) === true) {
  console.log(`Arrays are equal.`)
} else {
  console.log(`Arrays are not equal.`)
}
};


console.log(assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ])) // => Equal 
console.log(assertArraysEqual(results1, [ '2', 'c', 't', 'm', 't' ])) // => Not Equal 
console.log(assertArraysEqual(results1, [ 'g', 'c', 'm', 't' ])) // => Not Equal 



