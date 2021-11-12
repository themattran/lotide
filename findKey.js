const assertEqual = require('./assertEqual');


const findKey = function (object, callback) {
  const objectKeys = Object.keys(object)

  for (let objectKey of objectKeys) {
    const objectValue = object[objectKey]; 
    if (callback(objectValue) === true) { 
      return objectKey;

    }
  }
}

module.exports = findKey; 
