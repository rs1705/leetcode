/**
 * @param {number[]} height
 * @return {number}
 */
 var trap=(height)=>{

   let left = 0;
  let right = height.length - 1;
  let rightMax = height[right];
  let leftMax = height[left];
  let water = 0;
  while (left < right) {
    if (leftMax < rightMax) {
      left = left + 1;
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
    } else {
      right = right - 1;
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
    }
  }
  return water;
};