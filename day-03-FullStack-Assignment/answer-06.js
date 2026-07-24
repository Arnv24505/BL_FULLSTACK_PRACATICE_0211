/*
Q6. Chaining Array Methods

Given:
[1,2,3,4,5,6,7,8,9,10]

Perform the following operations in a single expression:

1. Filter out even numbers.
2. Square the remaining odd numbers.
3. Find the sum of the squared values.

Method chaining makes the code concise and readable.
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];

const result = numbers
    .filter(number => number % 2 !== 0)
    .map(number => number * number)
    .reduce((sum, number) => sum + number, 0);

console.log(result);

// Output: 165

/*
Explanation

Original Array:
[1,2,3,4,5,6,7,8,9,10]

After filter():
[1,3,5,7,9]

After map():
[1,9,25,49,81]

After reduce():
1 + 9 + 25 + 49 + 81 = 165

Time Complexity

filter() -> O(n)
map()    -> O(n)
reduce() -> O(n)

Overall Time Complexity:
O(n)
*/