/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
  let nums2Greater = new Array(nums2.length).fill(-1);
  let stack = [];
  const m = new Map();
  for (let i = 0; i < nums2.length; i++) {
    let current = nums2[i];
    
    while (stack.length > 0 && current > nums2[stack.at(-1)]) {
      const idx = stack.pop();
      nums2Greater[idx] = nums2[i];
    }
    stack.push(i);
  }

  for (let i = 0; i < nums2.length; i++) {
    m.set(nums2[i], nums2Greater[i]);
  }
  let ans = [];
  for (let i = 0; i < nums1.length; i++) {
    ans[i] = m.get(nums1[i]);
  }
  return ans;
};