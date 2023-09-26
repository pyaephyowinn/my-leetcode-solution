/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // if (s.length === 0) return 0;
  var longestLen = 0;
  for (var i = 0; i <= s.length; i++) {
    var subStr = "";
    for (var j = i; j <= s.length; j++) {
      var ch = s.charAt(j);
      if (subStr.includes(ch)) {
        if (subStr.length > longestLen) {
          longestLen = subStr.length;
        }
        break;
      } else {
        subStr += ch;
      }
    }
    console.log("subStr", subStr.length);
  }
  console.log("longestLen", longestLen);
  return longestLen;
};

lengthOfLongestSubstring(" ");
