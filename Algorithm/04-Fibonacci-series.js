/* Problem: Given a number "n", Find the first "n" elements of the fibonacci sequence.

In math, the fibonacci sequence is a sequence in which each number is the sum of the two preceding ones

the first two numbers in the sequence are 0 and 1.
Ex: Fibonacci(2) = [0,1]
Ex: Fibonacci(3) = [0,1,1]
Ex: Fibonacci(4) = [0,1,1,2]
*/

const fibonacci = (n) => {
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
};

console.log(fibonacci(4));

// Big-O notation: O(n) lenear
