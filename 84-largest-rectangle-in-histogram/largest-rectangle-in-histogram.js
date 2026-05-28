/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
  let stack = [];
  let maxArea = 0;
  for (let i = 0; i < heights.length; i++) {
    let current = heights[i];
    while (stack.length && current < heights[stack.at(-1)]) {
      let poppedIndex = stack.pop();
      let poppedHeight = heights[poppedIndex];
      let leftBoundary = stack.length === 0 ? -1 : stack.at(-1);
      let rightboundary = i;
      let area = poppedHeight * (rightboundary - leftBoundary - 1);
      maxArea = Math.max(area, maxArea);
    }
    stack.push(i);
  }
  while (stack.length) {
    let poppedIndex = stack.pop();

    let poppedHeight = heights[poppedIndex];

    let leftBoundary = stack.length === 0 ? -1 : stack.at(-1);

    let rightBoundary = heights.length;

    let width = rightBoundary - leftBoundary - 1;

    let area = poppedHeight * width;

    maxArea = Math.max(area, maxArea);
  }
  console.log(maxArea);
  return maxArea;
};