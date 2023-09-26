/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */

var maxVowels = function (s, k) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  if (s.length === 0 || k === 0) return 0;

  let prevVowelsCount = 0;

  for (let i = 0; i < s.substring(0, k).length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      prevVowelsCount++;
    }
  }

  let maxVowelsCount = prevVowelsCount;

  for (let i = 1; i <= s.length - k; i++) {
    const removedChar = s[i - 1];
    const addedChar = s[k + i - 1];

    // console.log('i', i);
    // console.log('maxVowelsCount', maxVowelsCount);
    // console.log('removedChar', removedChar);
    // console.log('addedChar', addedChar);
    // console.log('/-----');

    if (vowels.includes(removedChar.toLowerCase())) {
      prevVowelsCount--;
    }

    if (vowels.includes(addedChar.toLowerCase())) {
      prevVowelsCount++;
    }

    if (prevVowelsCount > maxVowelsCount) {
      maxVowelsCount = prevVowelsCount;
    }
  }
  console.log('maxVowelsCount', maxVowelsCount);
};

maxVowels('leetcode', 3);
