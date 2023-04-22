/**
 * 
 * Given an array of integers nums and an integer target, 
 * return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, 
 * and you may not use the same element twice. 
 * 
 * You can return the answer in any order.
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

  if (nums.length < 2) return undefined;

  let leftPtr = 0; // 0
  let rightPtr = 1; // 1

  for (leftPtr ; leftPtr < nums.length-2; leftPtr++) {
    
    for (rightPtr ; rightPtr < nums.length-1; rightPtr++) {
      
        let valSum = nums[leftPtr] + nums[rightPtr];
        console.log(valSum)
        if (valSum === target) {
            return [nums[leftPtr], nums[rightPtr]];
        } 
    }
  }
  return undefined;
};

console.log(twoSum([2,7,11,15], 18))