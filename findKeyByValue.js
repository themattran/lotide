// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
  
  const findKeyByValue = function (object, genre) {
    const keyArray = Object.keys(object) // Outputs: [ 'sci_fi', 'comedy', 'drama' ]
    // const keyArray = Object.keys(object)[Object.values(object).indexOf(genre)]
    // console.log(keyArray)
    // return keyArray

    for (let key of keyArray) {
      if (object[key] === genre) { //object[key] IS the value
        return key;
      }
    }
  }

  const bestTVShowsByGenre = {
    sci_fi: "The Expanse", 
    comedy: "Brooklyn Nine-Nine", 
    drama: "The Wire"
  };

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"))
