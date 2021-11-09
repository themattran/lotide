const assert = require('chai').assert; 
const middle = require('../middle')


describe("#middle", () => {

  it("Should return [] of [1]", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("Should return [2] of [1, 2, 3] ", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("Should return [2, 3] of [1, 2, 3, 4]", () => {
    assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
  });

})


