const countOccur = (arr) => {
  const counts = {};

  for (const num of arr) {
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }

  return counts;
};

const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
console.log(countOccur(arr));
console.log(countOccur(arr)[5]);

// Big o notation: O(n)
