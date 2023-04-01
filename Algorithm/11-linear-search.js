/* 
given an array of n elements and a target element t.
find the index of t in the array. return -1 if the target element is not found.

ex:
arr = [-5,2,10,4,6], t=10 => should return 2
arr = [-5,2,10,4,6], t=6 => should return 4
arr = [-5,2,10,4,6], t=20 => should return -1
*/
/*
pseudocode linear search algorithm:
-----------------------------------
1. start at the first element in the array and move towards the last
2. At each element though, check if the element is equal to to target element.
3. if the element found, return the index of the element.
4. if the element is not found, return -1
*/

const linearSearch = (arr, target) => {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10));
console.log(linearSearch([-5, 2, 10, 4, 6], 4));
console.log(linearSearch([-5, 2, 10, 4, 6], 20));

// Big o notation: O(n)
