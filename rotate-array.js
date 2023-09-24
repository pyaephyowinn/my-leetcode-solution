/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  if (k <= nums.length) {
    var removedElements = nums.splice(nums.length - k);
    nums.unshift(...removedElements);
  } else {
    for (let i = 0; i < k; i++) {
      let removedElement = nums.pop();
      nums.unshift(removedElement);
    }
  }
};

rotate([-1, -100, 3, 99], 2);
