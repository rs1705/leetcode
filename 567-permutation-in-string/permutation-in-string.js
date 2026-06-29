var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1count = new Array(26).fill(0);
  const windowcount = new Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1count[s1.charCodeAt(i) - 97]++;
    windowcount[s2.charCodeAt(i) - 97]++;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1count[i] === windowcount[i]) matches++;
  }

  let left = 0;
  for (let right = s1.length; right < s2.length; right++) {
    if (matches === 26) return true;
    let index = s2.charCodeAt(right) - 97;
    windowcount[index]++;

    if (windowcount[index] === s1count[index]) {
      matches++;
    } else if (windowcount[index] === s1count[index] + 1) {
      matches--;
    }

    index = s2.charCodeAt(left) - 97;
    windowcount[index]--;
    if (windowcount[index] === s1count[index]) {
      matches++;
    } else if (windowcount[index] === s1count[index] - 1) {
      matches--;
    }
    left++;
  }
  return matches === 26;
};