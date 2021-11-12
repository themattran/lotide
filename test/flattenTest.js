const flatten = require ('../flatten'); 
const assert = require ('chai').assert;


describe ("#flatten", () => {

  it("should return [ 1, 2, 3, 4, 5, 6 ] of [1, 2, [3, 4], 5, [6]]", () => {
    assert.deepEqual(flatten(sourceArray), [ 1, 2, 3, 4, 5, 6 ])
  })
  
})


const sourceArray = [1, 2, [3, 4], 5, [6]]; 