const findKeyByValue = require ('../findKeyByValue'); 
const assert = require ('chai').assert; 


describe ("#findKeyByvalue", () => {

  it("should return drama for The Wire", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama")
  })
  
  it("should return undefined for That '70s Show", () => {
    assert.deepEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)
  })
 
  
})


const bestTVShowsByGenre = {
  sci_fi: "The Expanse", 
  comedy: "Brooklyn Nine-Nine", 
  drama: "The Wire"
};

