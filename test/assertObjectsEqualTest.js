const assert  = require ('chai').assert; 
const assertObjectsEqual = require ('../assertObjectsEqual')

describe ("#assertObjectsEqual", () => {

  it("should return true for 'ab, ba'", () => {
    assert.deepEqual(assertObjectsEqual(ab, ba), '✅✅✅ Assertion Passed: { a: \'1\', b: \'2\' } === { b: \'2\', a: \'1\' }')
  })

  it("should return false for 'ab, ba'", () => {
    assert.deepEqual(assertObjectsEqual(ab, abc), '🛑🛑🛑 Assertion Failed: { a: \'1\', b: \'2\' } !== { a: \'1\', b: \'2\', c: \'3\' }')
  })

})


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };


const abc = { a: "1", b: "2", c: "3" };


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };

const cd2 = { c: "1", d: ["2", 3, 4] };
