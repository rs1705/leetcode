/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const cars = position
    .map((pos, i) => [pos, (target - pos) / speed[i]])
    .sort((a, b) => b[0] - a[0]);

  let count = 0;
  let prevTime = -1;
  for (const car of cars) {
    if (car[1] > prevTime) {
      count++;
      prevTime = car[1];
    }
  }
  return count;
};