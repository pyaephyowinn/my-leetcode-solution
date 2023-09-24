/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

var canPlaceFlowers = function (flowerbed, n) {
  if (flowerbed.length === 0 && n === 1) return true;

  let isPrevOne = true;
  const arr = [];
  let arrIndex = -1;
  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      if (isPrevOne) {
        arrIndex++;
        arr[arrIndex] = 0;
        isPrevOne = false;
      }

      if (i === 0 || i === flowerbed.length - 1) {
        arr[arrIndex] = arr[arrIndex] + 2;
      } else {
        arr[arrIndex] = arr[arrIndex] + 1;
      }
    } else {
      isPrevOne = true;
    }
  }

  console.log(arr);

  let totalFlowers = 0;
  for (let i = 0; i < arr.length; i++) {
    const numOfFlowers = Math.floor((arr[i] - 1) / 2);
    totalFlowers += numOfFlowers;
  }

  return totalFlowers >= n;
};

canPlaceFlowers([0, 0, 1, 0, 1]);
