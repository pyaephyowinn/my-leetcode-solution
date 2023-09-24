let isDivideBy = (letter, word) => {
  // console.log('letter', letter);
  console.log('word', word);
  // console.log('letter.length % word.length', letter.length % word.length);
  console.log('/----------------------------');
  if (letter.length % word.length !== 0) {
    return false;
  }
  const times = letter.length / word.length;
  for (let i = 0, j = 0; j < times; i += word.length, j++) {
    const temp = letter.slice(i, i + word.length);
    if (temp !== word) {
      return false;
    }
  }

  return true;
};

var gcdOfStrings = function (str1, str2) {
  const [longerString, shorterString] = (() => {
    if (str1.length > str2.length) return [str1, str2];
    return [str2, str1];
  })();
  for (let i = 0; i < shorterString.length; i++) {
    // const testWord = shorterString.slice(0, i + 1);
    const testWord = shorterString.slice(0, shorterString.length - i);

    if (
      isDivideBy(longerString, testWord) &&
      isDivideBy(shorterString, testWord)
    ) {
      console.log(testWord);
      return;
    }
  }
  console.log('false');
};

gcdOfStrings(
  'TAUXXTAUXXTAUXXTAUXXTAUXX',
  'TAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXXTAUXX'
);
