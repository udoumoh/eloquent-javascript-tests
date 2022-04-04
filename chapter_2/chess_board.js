/**
 * Generates a chess board of specified size. Output should be returned not just logged
 * @param {Number} [size=8] Size of the chessboard to be generated
 * @returns {String} Returns the generated chess board as a string
 */
const chessBoardGenerator = (size=8) => {
    let chessBoard = '';
    // Write code to genrate chess board after this line
    let size = 8;
let count  = "";
for(let i = 0; i < size; i++){
 for(let j = 0; j < size; j++){
 if((j+i) % 2 == 0){
	count += " "; 
 }else{
 	count += "#"
 }
 }
  count += "\n";
}
console.log(count);


    return chessBoard;
}


module.exports = chessBoardGenerator;
