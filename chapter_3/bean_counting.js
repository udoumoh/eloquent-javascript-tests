/**
 * Function that generates a function to count the number of times a given character appears in a string
 * 
 * @param {String} character the character to be searched for
 * 
 * @returns {Function} Function that counts number of times specified character appears in a string
 */
function countChar(character) {
    // Enter code to return character counting function
    function countBs(text){
  return countChar(text, "B");
}

function countChar(text, letter){
  let count = 0;
  let textString = text.toString();
  let letterString = text.toString();
  for(let i = 0; i < textString.length; i++){
    if(textString[i] == `${letter}`){
      count += 1;
    }
  }
  return count;
}
}

// Hint: Check out the closure section
let countBs = countChar('B');

module.exports = countBs;
