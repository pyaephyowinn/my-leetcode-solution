const maxArea = (height) => {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    if ((i + 1) * height.length < max) continue;
    for (let j = i + 1, factor = 1; j < height.length; j++, factor++) {
      const area = Math.min(height[i], height[j]) * factor;
      if (area > max) {
        max = area;
      }
    }
  }

  console.log('max', max);
  return max;
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
