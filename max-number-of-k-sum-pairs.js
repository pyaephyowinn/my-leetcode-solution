/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let count = 0;
  for (let i = 0; i < nums.length / 2; i++) {
    console.log('i', i);
    // console.log(i, nums.length - i - 1);
    // console.log(nums[i], nums[nums.length - i - 1]);

    for (let j = i + 1; j < nums.length; j++) {
      console.log('nums[i], nums[j]', nums[i], nums[j]);
      if (nums[i] + nums[j] === k) {
        console.log(nums[i], nums[j]);
        count++;
        nums.splice(i, 1);
        nums.splice(j - 1, 1);
        i--;
        console.log('nums', nums);
        continue;
      }
    }
  }
  console.log('count', count);
};

maxOperations([3, 1, 3, 4, 3, 3], 6);
// maxOperations([3, 1, 3, 4], 6);
