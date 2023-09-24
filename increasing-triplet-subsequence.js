var increasingTriplet = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= Math.max(...nums)) {
      console.log('first');
      // return false;
      continue;
    }
    let streaks = 0;
    let curTarget = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > curTarget) {
        streaks++;
        curTarget = nums[j];

        for (let k = j + 1; k < nums.length; k++) {
          if (nums[k] > curTarget) {
            streaks++;
            curTarget = nums[k];
          }

          if (streaks >= 2) {
            return true;
          }
        }
        streaks = 0;
        curTarget = nums[i];
      }
    }

    if (streaks >= 2) {
      return true;
    }
  }
  return false;
};

// console.log(increasingTriplet([9, 10, 5, 11, 10, 9, 8]));
// console.log(increasingTriplet([0, 4, 1, 3]));
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]));
