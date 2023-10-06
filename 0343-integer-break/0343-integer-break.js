/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp= new Array(n+1).fill(0);
    dp[1]=1;
    dp[2]=1;
    for(let i=3;i<=n;i++){
      for(let k=1;k<i;k++){
        dp[i]=Math.max(k*dp[i-k], k*(i-k), dp[i]);
      }
    }
    return dp[n];
};