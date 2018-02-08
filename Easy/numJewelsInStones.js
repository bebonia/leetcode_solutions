/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    var items = J.split("");
    var count = 0;
    
    S.split("").forEach(function(letter) {
        if(items.includes(letter)) {
            count += 1;
        }
    })
    
    return count;
};