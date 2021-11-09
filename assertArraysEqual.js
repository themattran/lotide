const eqArrays = require('./eqArrays'); 

const assertArraysEqual = function (actual, expected) {

    if (eqArrays(actual, expected) === true) {
    console.log(`true`)
  } else {
    console.log(`false`)
  }
};

module.exports = assertArraysEqual; 

