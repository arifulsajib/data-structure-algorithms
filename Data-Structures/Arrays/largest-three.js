// Find the largest three distinct elements in an array
// Input: arr[] = {10, 4, 3, 50, 23, 90}
// Output: 90, 50, 23
const largestThree = (arr) => {
  let arrSort = arr.sort((a, b) => {
    return a - b;
  });
  const num1 = arrSort.pop();
  const num2 = arrSort.pop();
  const num3 = arrSort.pop();
  const largestThree = `${num1}, ${num2}, ${num3}`;
  return largestThree;
};

const output = largestThree([1, 5, 6, 9, 22, 53]);
console.log(output);

// Big O notation: O(n)
