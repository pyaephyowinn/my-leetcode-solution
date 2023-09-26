/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function (nums, k) {
  let i = 0;
  let maxConsecutiveOneCount = 0;
  let consecutiveOneCount = 0;
  let zeroIndexes = [];

  while (zeroIndexes.length <= k) {
    console.log('i', i);
    console.log('maxConsecutiveOneCount', maxConsecutiveOneCount);
    console.log('/------');
    if (nums[i] === 0) {
      console.log('push', i);
      zeroIndexes.push(i);
    } else {
      consecutiveOneCount++;
    }

    if (i === nums.length - 1) {
      console.log('break');
      break;
    }

    if (zeroIndexes.length > k) {
      console.log('first');
      console.log('consecutiveOneCount', consecutiveOneCount);
      if (consecutiveOneCount > maxConsecutiveOneCount) {
        maxConsecutiveOneCount = consecutiveOneCount;
        consecutiveOneCount = 0;
      }
      i = zeroIndexes.at(-1);
      console.log('zeroIndexes', zeroIndexes);
      zeroIndexes.shift();
    }

    i++;
  }

  console.log(maxConsecutiveOneCount);
};

longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3);
