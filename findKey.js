
  const findKey = function (object, callback) {
    const objectKeys = Object.keys(object)


    for (let objectKey of objectKeys) {
      const objectValue = object[objectKey]; // of the object from findKey we are targeting objectkey (e.g. "Blue Hill"). This equals to the ObjectValue of findKey() (e.g. { stars: 1 } and we plug this into callback functionto see if it === 2 )
      if (callback(objectValue) === true) { 
        return objectKey;
      }
    }
  }



findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2) // => "noma"





// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  
console.log(assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), 'noma'))