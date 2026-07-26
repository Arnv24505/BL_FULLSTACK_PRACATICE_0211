/*

Difference:

1. Iterable:
   - Has Symbol.iterator method.
   - Can be used with for...of.
   - Examples: Array, Set, Map, String.

2. Array-like:
   - Has numeric indexes and a length property.
   - Does NOT have Symbol.iterator by default.
   - Cannot be used directly with for...of.
   - Example: {0:"a",1:"b",length:2}
*/

const iterable = new Set([1, 2, 3]);

const arrayLike = {
    0: "a",
    1: "b",
    2: "c",
    length: 3
};

/*
Convert iterable to array using Array.from()
*/

const arr1 = Array.from(iterable);
console.log("Iterable to Array:", arr1);

/*
Convert array-like object to array using Array.from()
*/

const arr2 = Array.from(arrayLike);
console.log("Array-like to Array:", arr2);

/*
Using for...of on iterable works because Set is iterable.
*/

console.log("\nIterating Set:");

for (const value of iterable) {
    console.log(value);
}

/*
Using for...of on array-like object throws an error
because it does not implement Symbol.iterator.
*/

console.log("\nIterating Array-like:");

try {
    for (const value of arrayLike) {
        console.log(value);
    }
} catch (error) {
    console.log(error.message);
}