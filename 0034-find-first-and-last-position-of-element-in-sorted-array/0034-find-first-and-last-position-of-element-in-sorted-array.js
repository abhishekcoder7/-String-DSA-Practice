/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let arr=[-1,-1];
    let flag=false;

    for(let i =0;i<nums.length;i++){
       
      if(nums[i]==target && flag==false){
        arr[0]=i;
        arr[1]=i;
        flag=true;
      }
      else if(flag==true && nums[i]==target){
        arr[1]=i;
        continue;
      }
      else if(flag==true && nums[i]!=target){
        arr[1]=i-1;
        return arr;
      }
    }
    return arr;
};