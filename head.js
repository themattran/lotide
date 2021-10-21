// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
const head = function(arr) {
return arr[0]; 
}
  
  // TEST CODE
// const headOutput = head([5,6,7])
// assertEqual(headOutput, 5);

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");