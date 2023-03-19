/* 
Algorithm analysis: 
------------------
There are multiple ways to solve a problem.
Ex: there are multiple ways to sort a list of numbers
How do we analyse which one of them is the most efficient algorithm?

Generally, when we talk about performance, we use an absolute measure. if i can run 100 meters in 12 seconds, I am faster than someone who takes 15 seconds. But analysing algrorithms is a bit different.

The absolute running time of an algorithm cannot be predicted since it depends on a number of factors.

It can change based on:
1. the programming language used to implement the algorithm
2. the computer the program runs on
3. Other programs running at the same time
4. Quality of operating systems and many more


--We evaluate the performance of an algorithm in terms of its input size --
The evaluation has two types:
1. Time Complexity: Amount of time taken by an algorithm to run, as a function of input size
2. Space Complexity: The amount of memory taken by the algorithm to run, as a function of input size

By evaluating against the input size, the analysis is not only machine independent but the comparison is also more appropriate.

imagine if one algorithm is faster than the other for a small input size but slower for a larger input size we would never be able to accurately judge which is more efficient

-keep in mind there is no one solution that works best every single time it is always good to know multiple ways to solve the same problem and use the best solution given your constraints

-if your app needs to be very quick and has plenty of memory to work with you don't have to worry about space complexity

-on the other hand if you have little memory to work with you should pick a solution that is relatively slower but needs less space

Represent the complexity
------------------------
using asymptotic notations:
asymptotic notations are mathematical tools to represent time and space complexity.
there are mainly 3 asymptotic notations:
1. Big-O notation: for worst case complexity **
2. Omega notation: for best case complexity
3. Theta notation: for average case complexity

now the first step in being practical is to not worry about the best and average case complexity

as you deal with problems you'll realize that we are primarily concerned with the worst case scenario of an algorithm and to be honest it is what is asked during interviews as well..



*/
