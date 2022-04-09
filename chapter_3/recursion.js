/**
 * Function to check the parity of a specified number
 * 
 * @param {Number} numberToCheck the number to check its parity
 * 
 * @returns {Boolean} Returns true if numberToCheck is even and false otherwise
 */
const isEven = (numberToCheck) => {
    // Enter code to check number partiy after this line
    function isEven(number){
  function find(current){
    if (current == number){
      return true;
    } else if (current > number){
     return false; 
    } else {
      return find(current + 2);
    }
  }
  return find(0);
}
    
}


module.exports = isEven;
