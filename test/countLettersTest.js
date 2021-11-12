const assert = require('chai').assert;
const countLetters = require ('../countLetters'); 


describe ("#countLetters", () => {

  it("should return {d: 1, o: 2, g: 2} of 'doggo'", () => {
    assert.deepEqual(countLetters('doggo'), {d: 1, o: 2, g: 2})
  })
})

