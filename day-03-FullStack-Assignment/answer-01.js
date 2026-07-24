/*
    * Q1. forEach() vs map()
        Key Difference

        Both forEach() and map() are used to iterate over the elements of an array, but they are used for different reasons.

        forEach() method executes a function for each element in the array. It does not return a new array, so it is mainly used when we want to perform actions like printing values, updating the DOM, or making API calls.

        The map() method, on the other hand, is used to transform the elements of an array and returns a new array with the new values without changing the original array.
*/

// Using forEach()

const arr = [1, 2, 3, 4, 5];
const doubled = [];

arr.forEach(num => {
    doubled.push(num * 2);
});

console.log(doubled); // Output: [2, 4, 6, 8, 10]

// Using map()
const arr = [1, 2, 3, 4, 5];

const doubled = arr.map(num => num * 2);

console.log(doubled); // Output: [2, 4, 6, 8, 10]

/*
    Why is map() Preferred?
    map() is preferred because its main purpose is to create a new array modifying each element of an existing array. It automatically returns the new array, which makes the code simpler and more readable. In contrast, forEach() requires creating another array and manually adding each transformed value using push().
*/