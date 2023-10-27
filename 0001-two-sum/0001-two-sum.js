/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const obj={}
    let res=[];
    for(let i=0;i<nums.length;i++){
        if(target-nums[i] in obj){
            res.push(obj[target-nums[i]]);
            res.push(i);
            
            return res;
        }else{
            obj[nums[i]]=i;
        }
    }
};