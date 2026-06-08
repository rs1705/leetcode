/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      console.log(left + 1, right + 1);
      return [left + 1, right + 1];
    }
    if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};