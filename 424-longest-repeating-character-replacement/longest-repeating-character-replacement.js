/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let map = new Map();
  let left = 0,
    maxFreq = 0,
    result = 0;

  for (let right = 0; right < s.length; right++) {
    if (!map.has(s[right])) {
      map.set(s[right], 1);
    } else {
      map.set(s[right], map.get(s[right]) + 1);
    }

    maxFreq = Math.max(maxFreq, map.get(s[right]));

    let windowLength = right - left + 1;
    let replacements = windowLength - maxFreq;

    if (replacements > k) {
      map.set(s[left], map.get(s[left]) - 1);
      left++;
    }
    result = Math.max(result, right - left + 1);
  }
  return result;
};