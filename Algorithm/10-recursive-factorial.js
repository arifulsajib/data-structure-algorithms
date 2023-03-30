/*  
given an integer n find the factorial of that integer
*/

/* 
the factorial of a non-negative integer n denoted n! is the product of all positive integers less than or equal to n

5! = 5*4*3*2*1 = 1*2*3*4*5
4! = 4*3*2*1 = 1*2*3*4
1! = 1*1
0! = 1

Recursive aprroach:
-------------------
5! = 5*4!
4! = 4*3!
3! = 3*2!
2! = 2*1!
n! = n*(n-1)!

base case:
----------
0! = 1
*/

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
};

console.log(factorial(5));

// Big o notation: O(n) linear
