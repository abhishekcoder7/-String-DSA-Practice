/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 
 //DP Hard ques, padhna pdega yaar

var maxDotProduct = function(nums1, nums2) {
      if (nums2.length > nums1.length){
        [nums1,nums2] = [nums2,nums1]
    }

    let n = nums1.length
    let m = nums2.length

    let prev = new Array(m+1).fill(Number.MIN_SAFE_INTEGER)
    let curr = new Array(m+1).fill(Number.MIN_SAFE_INTEGER)

    for (let i=1;i<n+1;i++){
        for (let j=1;j<m+1;j++){
            curr[j] = Math.max(nums1[i-1]*nums2[j-1],
                               prev[j-1]+nums1[i-1]*nums2[j-1],
                               prev[j],
                               curr[j-1])
        }
        [curr,prev] = [prev,curr]
    }
    return prev[m]
};