/* problem: Given a natural number "n", determine if the number is prime or not.

A prime number is a natural number greater than 1 and is not a product of two smaller natural numbers.

isPrime(5) = true (1*5 or 5*1)
isPrime(4) = false (1*4 or 2*2 or 4*1)
*/

/* Solution 1: n divided by (2 to n-1 porjonto sobgulo number). if modulas is 0 then its not a prime number.
isPrime(5) = 5%2, 5%3, 5%4
 */
const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));

// Big-O notation: O(n) linear

/*  2nd solution;
sqrt(24) = 4.89
n=24, 4*6

sqrt(35) = 5.91
n=35, 5*7

So, we can see that if n is not prime number then it can be devided by a number that is less than sqrt(n).
*/
const isPrime2 = (n) => {
  if (n < 2) {
    return false;
  }
  for (i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isPrime2(1));
console.log(isPrime2(5));
console.log(isPrime2(4));

// Big-O notation: O(sqrt(n))
// Because as the input size increases we don't need to iterate the loop whole n times. we just need to loop it for sqrt(n) times.
