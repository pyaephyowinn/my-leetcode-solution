const romanToInt = (s) => {
  const romanChValues = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let totalValue = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'I' && (s[i + 1] === 'V' || s[i + 1] === 'X')) {
      totalValue += romanChValues[s[i + 1]] - romanChValues[s[i]];
      i++;
      continue;
    }
    if (s[i] === 'X' && (s[i + 1] === 'L' || s[i + 1] === 'C')) {
      totalValue += romanChValues[s[i + 1]] - romanChValues[s[i]];
      i++;
      continue;
    }
    if (s[i] === 'C' && (s[i + 1] === 'D' || s[i + 1] === 'M')) {
      totalValue += romanChValues[s[i + 1]] - romanChValues[s[i]];
      i++;
      continue;
    }
    totalValue += romanChValues[s[i]];
  }
  return totalValue;
};

romanToInt('III');
romanToInt('LVIII');
romanToInt('MCMXCIV');
