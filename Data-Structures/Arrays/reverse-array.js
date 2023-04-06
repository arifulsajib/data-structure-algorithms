// Function to reverse arr[] from start to end
function rvereseArray(arr) {
  let start = 0;
  let end = arr.length - 1;
  // [1, 2, 3, 4, 5, 6];
  while (start <= end) {
    var temp = arr[start];
    arr[start] = arr[end];
    // [6, 2, 3, 4, 5, 6];
    arr[end] = temp;
    // [6, 2, 3, 4, 5, 1];
    start++;
    end--;
  }
}

// function to print an array
function printArray(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// Test above functions
var arr = [1, 2, 3, 4, 5, 6];

// To print original array
printArray(arr);

// Function calling
rvereseArray(arr);

console.log("Reversed array is");

// To print the Reversed array
printArray(arr);

// Big o notaion: O(n)
