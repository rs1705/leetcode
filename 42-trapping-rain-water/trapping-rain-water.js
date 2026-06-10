/**
 * @param {number[]} height
 * @return {number}
 */
 var trap=(height)=>{

  let lMax = [];
  let rMax = [];
  let water = 0;
  lMax[0] = height[0];
  rMax[height.length - 1] = height[height.length - 1];
  for (let i = 1; i < height.length; i++) {
    lMax[i] = Math.max(height[i], lMax[i - 1]);
  }
  for (let i = height.length - 2; i >= 0; i--) {
    rMax[i] = Math.max(height[i], rMax[i + 1]);
  }
  for (let i = 0; i < height.length; i++) {
    water += Math.min(lMax[i], rMax[i]) - height[i];
  }
  return water;
};