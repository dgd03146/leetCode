/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const answer = []
    
    for(let i of nums1){
      if(nums2.includes(i) ){
          nums2[nums2.indexOf(i)] = -1
          answer.push(i)
      }
  }
    return answer
};