/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let p=0;
    let q=1;
    while(p<nums.length && q<nums.length){
        if(nums[p]+nums[q]===target){
           return [p, q]
       }
        
        if(q===nums.length-1){
            p++;
            q=p+1
        }else{
              q++
        }
        
      
        
    }
};