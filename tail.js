// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(words) {
  let result = [];
  for (let i = 1; i < words.length; i++) {
    result.push(words[i]);
  }
  return result;
};

//console.log(tail);

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!