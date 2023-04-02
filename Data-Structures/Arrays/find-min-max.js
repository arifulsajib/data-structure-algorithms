const findMinMax = (array) => {
  minValue = Infinity;
  maxValue = -Infinity;

  for (item of array) {
    // find minimum value
    if (item < minValue) minValue = item;

    // find maximum value
    if (item > maxValue) maxValue = item;
  }

  return { minValue, maxValue };
};

console.log(findMinMax([1, 345, 234, 21, 56789]).minValue);
console.log(findMinMax([1, 345, 234, 21, 56789]).maxValue);
