// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  //console.assert(actual === expected);
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
  
const countLetters = function(string) {
 result = {}; 

  for (const letter of string) {
    if (letter !== " "){ //Looking at string ONLY. If it is not a space then run inner conditional. If it is a space, then it will continue to loop
      if (result[letter]) {//Look for keys in string (aka letter)
        result[letter] += 1// if there is preexisting key, add 1 to preexisting key 
      } else {
        result[letter] = 1; //if there is no such key in result then make key in result = 1
      }
   }
}
  return result; 
}; 

console.log(countLetters("lighthouse in the house"));