const assertEqual = require('./assertEqual');
  
  
  const findKeyByValue = function (object, genre) {
    const keyArray = Object.keys(object) 
 

    for (let key of keyArray) {
      if (object[key] === genre) { 
        return key;
      }
    }
  }

module.exports = findKeyByValue; 
