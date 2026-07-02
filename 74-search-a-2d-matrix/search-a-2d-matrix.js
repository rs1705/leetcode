var searchMatrix = function (matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    if (target < matrix[i][0] || target > matrix[i][matrix[i].length - 1]) {
      continue;
    }
    let start = 0;
    let end = matrix[i].length - 1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (target > matrix[i][mid]) {
        start = mid + 1;
      } else if (target < matrix[i][mid]) {
        end = mid - 1;
      } else {
        return true;
      }
    }
  }
  return false;
};