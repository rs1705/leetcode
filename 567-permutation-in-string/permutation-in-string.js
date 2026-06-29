var checkInclusion = function (s1, s2) {
//   const compare = (obj1, obj2) => {
//     if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//       return false;
//     }
//     for (const key in obj1) {
//       if (obj1[key] !== obj2[key]) {
//         return false;
//       }
//     }
//     return true;
//   };

//   let left = 0;
//   let s1Count = {};
//   for (let s of s1) {
//     if (!s1Count[s]) {
//       s1Count[s] = 0;
//     }
//     s1Count[s] = s1Count[s] + 1;
//   }

//   let windowCount = {};
//   for (let right = 0; right < s2.length; right++) {
//     const ch = s2[right];
//     windowCount[ch] = (windowCount[ch] || 0) + 1;
//     if (right - left + 1 > s1.length) {
//       let leftCh = s2[left];
//       windowCount[leftCh]--;
//       if (windowCount[leftCh] === 0) delete windowCount[leftCh];
//       left++;
//     }

//     if (right - left + 1 === s1.length) {
//       if (compare(s1Count, windowCount)) return true;
//     }
//   }
//   return false;


 const s1Count = new Array(26).fill(0);
  const windowCount = new Array(26).fill(0);
  let left = 0;
  for (const s of s1) {
    s1Count[s.charCodeAt(0) - "a".charCodeAt(0)]++;
  }

  for (let right = 0; right < s2.length; right++) {
    windowCount[s2[right].charCodeAt(0) - "a".charCodeAt(0)]++;

    if (right - left + 1 > s1.length) {
      windowCount[s2[left].charCodeAt(0) - "a".charCodeAt(0)]--;
      left++;
    }
    if (right - left + 1 === s1.length) {
      let matched = true;
      for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== windowCount[i]) {
          matched = false;
          break;
        }
      }
      if (matched) return true;
    }
  }
  return false;



};