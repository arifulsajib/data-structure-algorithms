/*
given a number n find the nth element of the fibonacci sequence.
*/

/*
in mathematics the fibonacci sequence is a sequence in which each number is a sum of the two preceding ones.

the first two numbers in the sequence are zero and one.
So,
fib(0) = 0
fib(1) = 1
fib(6) = 8

Problem solving advice when it comes to recursion
----------------------------------------------
1. first you need to figure out how to break down the problem into smaller versions of the same problem.
2. second you need to identify the base case for recursion
*/

/*
Recursive approach:
1. smaller version
fib(n) = fib(n-1) + fib(n-2)
fib(6) = fib(5) + fib(4)

2. base case:
fib(0) = 0
fib(1) = 1
*/

const recursiveFibonacci = (n) => {
  // base case
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));

// Big O notation: O(2^n)
// it is not a good solution for fibonacci sequence.
