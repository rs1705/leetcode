/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let set = new Set();
  let maxLength = 0;
  let l = 0,
    r = 0;

  while (r < s.length) {
    if (!set.has(s[r])) {
      set.add(s[r]);
      r++;
    } else {
      set.delete(s[l]);
      l++;
    }
    maxLength = Math.max(maxLength, set.size);
  }
  return maxLength;
};