/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let index = 0;
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    for (let j = index; j < t.length; j++) {
      if (s[i] === t[j]) {
        index = j + 1;
        count++;
        break;
      }
    }
  }

  if (count !== s.length) return false;
  return true;
};

isSubsequence('acb', 'ahbgdc');
