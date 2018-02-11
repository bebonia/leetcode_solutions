/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

    
var hammingDistance = function(x, y) {

	// xor bitwise to determine bits where values are difference
    var xor_xy = (x^y).toString(2).split("");

    // counter for number of zeros
    var count = 0;

    for(var i=0; i<xor_xy.length; i++) {
    	//iterate through array and if the bit is different add 1 to count
        if(xor_xy[i] === "1") {
            count += 1;
        }
    }
    
  // return count  
  return count;
    
    
};