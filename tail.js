const assertEqual = require('./assertEqual');

const tail = function(words) {
  let result = [];
  for (let i = 1; i < words.length; i++) {
    result.push(words[i]);
  }
  return result;
};

module.exports = tail; 
