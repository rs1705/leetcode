/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const dequeue = [];
  const result = [];
  for (let right = 0; right < nums.length; right++) {
    if (dequeue.length > 0 && dequeue[0] < right - k + 1) {
      dequeue.shift();
    }

    while (
      dequeue.length > 0 &&
      nums[right] > nums[dequeue[dequeue.length - 1]]
    ) {
      dequeue.pop();
    }

    dequeue.push(right);
    if (right >= k - 1) {
      result.push(nums[dequeue[0]]);
    }
  }

  return result;
};