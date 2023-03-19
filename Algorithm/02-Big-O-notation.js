/*
Big-O Notation:
---------------
the worst case complexity of an algorithm is represented using the big-O notation.
big-O notation describes the complexity of an algorithm using algebraic terms. 

The big-O notation has two important chracteristics:
1. it is expressed in terms of the input

2. it focuses on the bigger picture without getting caught up in the minute details

Big-O Time Complexity:
---------------------
Lets take an example function:
sum of all the natural numbers from 1 to n
*/
// -----------1st Solution--------------
const summation = (n) => {
  let sum = 0; // executed once
  for (let i = 1; i <= n; i++) {
    sum += i; // executed n times
  }
  return sum; // executed once
};
// ------------------------------
/*
---- we have to count the number of times a statement executes based on the input size. ----

so n=4, count is 4+2;
total count is 4+2; which represents n+2

n=14, count is 14+2;
n=10000, count is 10000+2;
n=1M, count is 1M+2;
So, It repesents the 1st characteristics of Big-O notation which is it is expressed in terms of the input.

n=100M, count is 100M+2;
at that point the +2 is very insignificant we can actually drop it n+2 can be approximated to just n since n contributes the most to the total value. 
So, It repesents the 2nd characteristics which is it focuses on the bigger picture without getting caught up in the minute details. 

--------------------------------
time complexity of our summation algorithm is: 
O(n) (spell: big o of n) --- linear time complexity

what this means is that as the size of the input increases the time complexity also increases..

do i have to calculate the count line by line to determine the time complexity?
well you could but you can also perform some safe calculations anytime you see a loop in your algorithm most of the times you can safely say the time complexity is at least linear.

of course there are exceptions, but a loop's worst case is when it iterates over the entire input and hence the time complexity is linear.
*/
// ------------ 2nd solution----------------
const summation2 = (n) => {
  return (n * (n + 1)) / 2; // executed once
};
// ------------------------------

/*
In this Solution The time complexity is:
O(1)  (spell: O of 1) ---- Constant
respected of what the value is the algrorithm is executed only once.
 */

/* 
Important Note: Works in most cases, some exceptions
Time Complexity:
no loop       --- O(n)  --(spell: O of 1) Constant
1 loop        --- O(n)  --(spell: O of n) Linear
2 nested loop --- O(n^2) -- Quadratic
3 nested loop --- O(n^3) -- Cubic
input size reduced half every loop then: O(logn) Logarithmic

Space Complexity:
The idea remains same-
1. O(1) - Constant:
if the algorithm does not need extra memory or the memory needed does not depend on the input size the space complexity is constant. 
Ex: sorting algorithms which sort within the array without utilizing additional arrays

2. O(n) - Linear:
the extra space needed grows as the input size grows.

3. O(logn) - Logarithmic:
the extra space needed grows but not at the same rate as the input size

typically you would find algorithms with these three space complexities although it is common to solve with quadratic time complexity O(n2) but you should try to avoid it


Big-O trend:
------------
Good: O(logn), O(1)
Fair: O(n)
Bad: O(n logn)
Horrible: O(n^2), O(2^n), O(n!)


a few more points:
--------------------
1. Multiple algorithms exist for the same problem and there is no one right solution. Different algorithms work well under different constraints
you should always understand the problem statement before determining which is better 
2. The same algorithm with the same programming language can be implemented in different ways.

3. When writing programs at work don't lose sight of the big picture if you are writing a function that is called thousands of times every minute sure go ahead and optimize the code rather than writing clever code write code that is simple to read and maintain.
*/
