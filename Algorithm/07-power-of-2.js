/* 
Problem: Given a positive integer "n". Determine if the number is a power of 2 or not.

A integer is a power of two if n = 2^x. (jodi kono songkha k 2 er power diye prokash kora jay)

ex: 
1 = 2^0
2 = 2^1
3 = not posble to difine by 2^x
4 = 2^2
5 = not posble to difine by 2^x
6 = not posble to difine by 2^x
8 = 2^3
10 = not posble to difine by 2^x

*/

/* Solution: 
ex: each loop half the n
10/2 = 5, reminder=0
5/2 = 2, reminder=1

8/2 = 4, reminder=0 (n)
4/2 = 2, reminder=0 (n=n/2)
2/2 = 1, reminder=0 (n=prev n/2)

if n=1 its true
 */

//solution 1
const isPowerOfTwo = (n) => {
  if (n < 1) {
    false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(4));
console.log(isPowerOfTwo(5));

// Big-O notation: O(logn) logarithmic

/*
Solution 2: Powers of two in binary form always have just one bit. (except 1)
Binary:
n
1 -> 1 (one 1)
2 -> 10 (one 1, others 0) 
4 -> 100 (one 1, others 0)
8 -> 1000 (one 1, others 0)

If we subtract a power of 2 numbers by 1 then all unset bits after the only set bit become set, and the set bit becomes unset.
n-1
2-1 -> 01 (one 0, others 1)
4-1 -> 011 (one 0, others 1)
8-1 -> 0111 (one 0, others 1)

So, if a number n is a power of 2 then bitwise & of n and n-1 will be zero. 
n & n+1
4 & 4-1 => 100 & 011 = 000
8 & 8-1 => 1000 & 0111 = 0000
*/

const isPowerOfTwo2 = (n) => {
  if (n < 1) {
    false;
  }
  return (n & (n - 1)) === 0;
};

console.log(isPowerOfTwo2(1));
console.log(isPowerOfTwo2(4));
console.log(isPowerOfTwo2(5));
