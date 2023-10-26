/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }

  console.log('object', obj);
  console.log('/---------------------------');

  const keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], obj[keys[i]]);
  }
};

singleNumber([2, 2, 1]);
