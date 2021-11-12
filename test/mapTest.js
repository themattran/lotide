const map = require ('../map'); 
const assert = require ('chai').assert;



describe ("#map", () => {

  it("should return [ 'g', 'c', 't', 'm', 't' ] from ['ground', 'control', 'to', 'major', 'tom']", () => {
    assert.deepEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
  })
  
})


const words = ["ground", "control", "to", "major", "tom"];

