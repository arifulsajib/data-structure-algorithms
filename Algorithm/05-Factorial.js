/*
problem: given an integer "n", find the factorial of that integer

in mathematics, the factorial of a non-negative integer "n" (denoted n!), is the product of all positive integers less than or equal to "n".

-- NB: factorial of 0 = 1 ----
factorial of 4 = 4*3*2*1 = 24
factorial of 5 = 5*4*3*2*1 = 120

*/

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorial(4));

// Big-O notaion: O(n) linear
