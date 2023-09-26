var moveZeroes = function (nums) {
  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      console.log('i', i);
      console.log('before nums', nums);
      nums.splice(i, 1);
      nums.push(0);
      i--;
      len--;
      console.log('after nums', nums);
    }
  }
};

moveZeroes([0, 0, 1]);
