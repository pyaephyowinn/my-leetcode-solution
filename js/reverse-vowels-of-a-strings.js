const reverseVowels = (s) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  const chars = s.split('');
  vowelsIndex = [];

  chars.forEach((ch, index) => {
    if (vowels.includes(ch)) {
      vowelsIndex.push(index);
    }
  });

  for (let i = 0, len = Math.floor(vowelsIndex.length / 2); i < len; i++) {
    const fIndex = vowelsIndex[i];
    const lIndex = vowelsIndex[vowelsIndex.length - 1 - i];

    const temp = chars[fIndex];
    chars[fIndex] = chars[lIndex];
    chars[lIndex] = temp;
  }

  return chars.join('');
};

reverseVowels('leetcode');
