/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  //APPROACH 1: SORTING THE ARRAY AND MAINTAINING THE STREAK FOR CONSECUTIVE NUMBERS
//   if (nums.length === 0) {
//       return 0;
//     }
//   nums.sort((a, b) => a - b);
//   let maxStreak = 1;
//   let currentStreak = 1;
//   console.log(nums);
//   for (let i = 0; i < nums.length - 1; i++) {
    
//     let current = nums[i];
//     let next = nums[i + 1];
//     if (next - current === 0) {
//       continue;
//     }
//     if (next - current === 1) {
//       currentStreak += 1;
//       maxStreak = Math.max(maxStreak, currentStreak);
//     } else {
//       currentStreak = 1;
//     }
//   }
//   return maxStreak;


//APPROACH 2-> USING HASHSET TO STORE THE NUMBERS AND CHECKING FOR CONSECUTIVE NUMBERS

    if (nums.length === 0) return 0;

  const numSet = new Set();

  let longestStreak = 1;
  let currentStreak = 1;
  for (let n of nums) {
    numSet.add(n);
  }
  for (let n of numSet) {
    if (numSet.has(n - 1)) {
      continue;
    } else {
      while (numSet.has(n + 1)) {
        currentStreak++;
        n++;
      }
      longestStreak = Math.max(longestStreak, currentStreak);
      currentStreak = 1;
    }
  }
  return longestStreak;
};
