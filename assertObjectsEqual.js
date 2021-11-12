const eqObjects = require('./eqObjects');



const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    //console.log(inspect);
    return `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`;
    } else {
    return `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;
    }
};

module.exports = assertObjectsEqual; 

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };


const cd2 = { c: "1", d: ["2", 3, 4] };



console.log(assertObjectsEqual(ab, ba))
console.log(assertObjectsEqual(ab, abc))


