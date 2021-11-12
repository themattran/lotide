const findKey = require ('../findKey'); 
const assert = require ('chai').assert; 


describe ("#findKey", () => {

  it("should return noma for x.stars === 2", () => {
    assert.deepEqual(findKey(object, x => x.stars === 2), 'noma')
  })
 
  it("should return Akaleri for x.stars === 3", () => {
    assert.deepEqual(findKey(object, x => x.stars === 3), 'Akaleri')
  })
  
})



const object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}
