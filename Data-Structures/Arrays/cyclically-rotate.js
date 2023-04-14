// JavaScript code for program
// to cyclically rotate
// an array by one
function rotate(arr, n) {
  var x = arr[n - 1],
    i;
  for (i = n - 1; i > 0; i--) arr[i] = arr[i - 1];
  arr[0] = x;
}

var arr = [1, 2, 3, 4, 5];
var n = arr.length;

document.write("Given array is <br>");
for (var i = 0; i < n; i++) document.write(arr[i] + " ");

rotate(arr, n);

document.write("<br>Rotated array is <br>");
for (var i = 0; i < n; i++) document.write(arr[i] + " ");

// Big o notation: O(n)
