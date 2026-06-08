/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = (s) => {
  function isAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
  }

  let l = 0,
    r = s.length - 1;
  while (l < r) {
    if (!isAlphaNumeric(s[l])) {
      l++;
      continue;
    }
    if (!isAlphaNumeric(s[r])) {
      r--;
      continue;
    }

    if (s[l].toLowerCase() !== s[r].toLowerCase()) {
      return false;
    }       
      l++;
      r--;

  }
  return true;
};