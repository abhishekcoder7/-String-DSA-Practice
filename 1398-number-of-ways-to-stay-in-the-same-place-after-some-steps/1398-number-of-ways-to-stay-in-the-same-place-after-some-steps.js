/**
 * @param {number} steps
 * @param {number} arrLen
 * @return {number}
 */

 //DP HARD HAI!
var numWays = function(steps, arrLen) {
    const MOD = 1_000_000_007;
    arrLen = Math.min(Math.floor(steps / 2) + 1, arrLen);
    const dp = new Array(arrLen).fill().map(() => new Array(steps + 1).fill(-1));
    
    return calculateWays(steps, 0, dp);
    
    function calculateWays(steps, pos, dp) {
        if (steps < pos) return 0;
        if (steps === 0) return 1;
        if (dp[pos][steps] !== -1) return dp[pos][steps];
        
        let ways = 0;
        if (pos < dp.length - 1) ways = (ways + calculateWays(steps - 1, pos + 1, dp)) % MOD;
        if (pos > 0) ways = (ways + calculateWays(steps - 1, pos - 1, dp)) % MOD;
        ways = (ways + calculateWays(steps - 1, pos, dp)) % MOD;
        
        dp[pos][steps] = ways;
        return ways;
    }
};