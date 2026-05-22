/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //SORTING APPROACH->
  if (nums.length === 0) {
      return 0;
    }
  nums.sort((a, b) => a - b);
  let maxStreak = 1;
  let currentStreak = 1;
  console.log(nums);
  for (let i = 0; i < nums.length - 1; i++) {
    
    let current = nums[i];
    let next = nums[i + 1];
    if (next - current === 0) {
      continue;
    }
    if (next - current === 1) {
      currentStreak += 1;
      maxStreak = Math.max(maxStreak, currentStreak);
    } else {
      currentStreak = 1;
    }
  }
  return maxStreak;
};