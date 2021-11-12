const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');


const eqObjects = function (object1, object2) { 
  const keyArray1 = Object.keys(object1);
  const keyArray2 = Object.keys(object2);
  
  if (keyArray1.length !== keyArray2.length) {
    return false;
  } 
  
  for (let key of keyArray1) {

    if (Array.isArray(keyArray1[key]) && Array.isArray(keyArray2[key])) {
      if (eqArrays(keyArray1[key], keyArray2[key]) === false) {
        return false;
      } else {
        if (object1[key] !== object2[key]) {
          return false;
     }
     else {
     }
    }
  }
return true; 
  }
};  

module.exports = eqObjects; 
