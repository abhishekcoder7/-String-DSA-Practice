/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function(n) {
    if(n>0 && Math.log2(n)%2==0) return true
    return false
};