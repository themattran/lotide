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


//Alternative approach with for loop with [i]
// const letterPositions = function(string) {
//   const results = {}; 

//  for(let i = 0; i < string.length; i++){


//     if (string[i] !== " ") {
//       if (!results[string[i]]) {
//         results[string[i]] = []
//         results[string[i]].push(i)
//         //results[letter].push(string.indexOf(letter))
//       } else {
//         // console.log(results[letter])
//         results[string[i]].push(i); 
//       }
//   }
// }
//   return results; 
// }


assertArraysEqual(letterPositions("lighthouse in the house").e, [1]); 

console.log(letterPositions("lighthouse in the house")); 