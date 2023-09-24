/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length;
  let middle = Math.floor((start + end) / 2);
  while (start < end) {
    if (nums[middle] === target) {
      break;
    }

    if (target < nums[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  if (middle <= 0) return 0;
  return middle;
};

console.log(searchInsert([1, 3], 2));
