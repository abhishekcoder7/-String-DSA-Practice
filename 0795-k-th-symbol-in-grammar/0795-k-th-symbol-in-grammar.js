/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthGrammar = function(N, K) {
    
    if( N == 1){
        return 0;
    }
    if( K % 2 == 0 ){
        return 1 - kthGrammar( N-1, (K+1)>>1 );
    }else{
        return kthGrammar( N-1, (K+1)>>1 );
    }
    
    
};