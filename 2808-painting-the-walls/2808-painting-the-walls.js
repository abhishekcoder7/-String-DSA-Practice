/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */

 // DP HARD
var paintWalls = function(cost, time) {
    const n = cost.length;
    const money = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
    money[0] = 0;
    for (let i = 0; i < n; i++) {
        for (let j = n; j > 0; j--) {
            money[j] = Math.min(money[j], money[Math.max(j - time[i] - 1, 0)] + cost[i]);
        }
    }
    return money[n];
};
