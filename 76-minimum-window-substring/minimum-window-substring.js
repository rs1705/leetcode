/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return "";

  const tcount = {};
  let windowcount = {};

  for (const ch of t) {
    tcount[ch] = (tcount[ch] || 0) + 1;
  }

  let left = 0;
  let formed = 0;
  let required = Object.keys(tcount).length;
  let bestSoFar = s;
  let bestSoFarLen = Infinity;
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    windowcount[ch] = (windowcount[ch] || 0) + 1;

    if (tcount[ch] !== undefined && windowcount[ch] === tcount[ch]) {
      formed++;
    }

    while (formed === required) {
      if (s.slice(left, right + 1).length < bestSoFarLen) {
        bestSoFar = s.slice(left, right + 1);
        bestSoFarLen = bestSoFar.length;
      }
      const leftChar = s[left];
      windowcount[leftChar]--;
      if (
        tcount[leftChar] !== undefined &&
        windowcount[leftChar] < tcount[leftChar]
      ) {
        formed--;
      }
      left++;
    }
  }
  return bestSoFarLen === Infinity ? "" : bestSoFar;
};
console.log(minWindow("a", "a"));
