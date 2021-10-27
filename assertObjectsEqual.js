
  const eqArrays = function (arrayOne, arrayTwo) {
    console.log("this is arrayOne", arrayOne);
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

const eqObjects = function (object1, object2) { 
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  if (keyArray1.length !== keyArray2.length) {
    console.log(`keyArray length check failed`);
    return false;
  } 
  
  for (let key of keyArray1) {

    if (Array.isArray(keyArray1[key]) && Array.isArray(keyArray2[key])) {
      console.log(`this is keyArray in eqObjects`, keyArray1)
      if (eqArrays(keyArray1[key], keyArray2[key]) === false) {
        console.log(`eqArray check for keys failed` )
        return false;
      } else {
        if (object1[key] !== object2[key]) {
          console.log(`At least one of the values did not match`);
          return false;
     }
     else {
       console.log(`values in the keys match`);
     }
    }
  }
return true; 
}
};



const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    //console.log(inspect);
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
    }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
//assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//assertEqual(eqObjects(cd, dc), true); // => true
console.log(eqObjects(cd, dc))
const cd2 = { c: "1", d: ["2", 3, 4] };
//assertEqual(eqObjects(cd, cd2), false); // => false


console.log(assertObjectsEqual(ab, ba))
console.log(assertObjectsEqual(ab, abc))


