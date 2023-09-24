var isPalindrome = function (x) {
  const str = x.toString();
  for (let i = 0; i < str.length + 1; i++) {
    if (str.charAt(i) !== str.charAt(str.length - (i + 1))) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome(-121));
