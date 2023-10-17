/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let obj={}
    for(let i=0;i<nums.length;i++){
        if(nums[i] in obj) return true
        obj[nums[i]]=1;
    }
    return false;
};