const letterPositions = require ('../letterPositions'); 
const assert = require ('chai').assert;


describe ("#letterPositions", () => {

  it("should return { d: [ 0 ], o: [ 1, 4 ], g: [ 2, 3 ] } from doggo", () => {
    assert.deepEqual(letterPositions("doggo"), { d: [ 0 ], o: [ 1, 4 ], g: [ 2, 3 ] })
  })
  
})
