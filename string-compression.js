/**
 * @param {character[]} chars
 * @return {number}
 */
// var compress = function (chars) {
//   let prevCh = '';
//   let resultObj = {};

//   for (let i = 0; i < chars.length; i++) {
//     if (chars[i] === prevCh) {
//       resultObj[chars[i]]++;
//     } else {
//       resultObj[chars[i]] = 1;
//       prevCh = chars[i];
//     }
//   }

//   chars = [];
//   Object.keys(resultObj).forEach((key) => {
//     chars.push(key);
//     if (resultObj[key] > 1) {
//       chars.push(...resultObj[key].toString().split(''));
//     }
//   });

//   console.log(chars);
//   console.log(chars.length);
// };

var compress = function (chars) {
  let prevCh = chars[0];
  let curIndex = 0;
  let streaks = 1;

  for (let i = 1, len = chars.length; i < len; i++) {
    if (chars[i] === prevCh) {
      streaks++;
    } else {
      prevCh = chars[i];
      if (streaks > 1) {
        chars.splice(
          curIndex + 1,
          streaks - 1,
          ...streaks.toString().split('')
        );

        if (streaks >= 10) {
          i -= streaks + streaks.toString().length - 5;
        } else {
          i -= streaks - 2;
        }
      }

      curIndex = i;
      streaks = 1;
    }

    if (i === chars.length - 1 && streaks > 1) {
      chars.splice(curIndex + 1, streaks - 1, ...streaks.toString().split(''));
      break;
    }
  }

  return chars.length;
};

compress([
  'a',
  'a',
  'a',
  'a',
  'a',
  'a',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'b',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
  'c',
]);
