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
Solution 2: Je sonkha gular power of two ache sei songha and tar aager songshar binary +(&) korle sobsomoy 0 paowa jay. 
Je sonkha gular power of 2 nae segula 0 pawa jay na.

Binary:
2 er binary 10; 2-1=1 er binary 01
2 & (2-1) --> 10 + 01 = 00   ===>True

4 er binary 100; 4-1=3 er binary 011
4 & (4-1) --> 100 + 011 = 000   ===>True

8 er binary 1000; 8-1=7 er binary 0111
8 & (8-1) --> 1000 + 0111 = 0000   ===>True

7 er binary 111; 7-1=6 er binary 110
7 & (7-1) --> 111 + 110 = 110   ===>false
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

// Big-O notation: O(1) constant
