// method 1
const rotate = (arr, n) => {
  let x = arr[n - 1],
    i;
  for (i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
  arr[0] = x;
};

let arr = [1, 2, 3, 4, 5];
let n = arr.length;

document.write("Given array is <br>");
for (let i = 0; i < n; i++) document.write(arr[i] + " ");

// call function
rotate(arr, n);

// print one by one
document.write("<br>Rotated array is <br>");
for (let i = 0; i < n; i++) document.write(arr[i] + " ");

// Big o notation O(n)
