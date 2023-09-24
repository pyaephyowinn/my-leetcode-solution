/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  if (nums.length === k) return nums.reduce((a, b) => a + b, 0) / k;

  let prevSum = 0;
  let maxIndex = 0;

  for (let i = 0; i < k; i++) {
    prevSum += nums[i];
  }
  let max = 0;

  for (let i = 1; i <= nums.length - k; i++) {
    console.log('i', i);
    console.log('prev Sum', prevSum);
    prevSum = prevSum - nums[i - 1] + nums[k + i - 1];
    console.log('after Sum', prevSum);
    console.log('/----------');

    if (prevSum > max) {
      maxIndex = i;
      max = prevSum;
    }
  }

  console.log('max', max);
};

findMaxAverage([9, 7, 3, 5, 6, 2, 0, 8, 1, 9], 6);
// findMaxAverage([1, 12, -5, -6, 50, 3, 100], 4);
