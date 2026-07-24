const arr = [1, 2, 3];

const result = arr

    .map(x => {

        console.log("map:", x);

        return x * 2;

    })

    .filter(x => {

        console.log("filter:", x);

        return x > 2;

    })

    .reduce((accumulator, currentValue) => {

        console.log("reduce:", currentValue);

        return accumulator + currentValue;

    }, 0);

console.log(result);


/*
Console Output

map: 1
map: 2
map: 3

filter: 2
filter: 4
filter: 6

reduce: 4
reduce: 6

10
*/


/*
Step 1

map()

Original Array

[1,2,3]

↓

Multiply every element by 2

↓

New Array

[2,4,6]


Step 2

filter()

Input

[2,4,6]

↓

Keep values greater than 2

↓

New Array

[4,6]


Step 3

reduce()

Start with accumulator = 0

0 + 4 = 4

4 + 6 = 10

Final Result

10


Order of Execution

Entire map() executes first.

↓

Entire filter() executes next.

↓

Entire reduce() executes last.

The methods do NOT process one element completely through all stages before moving to the next element. Each array method completes its full pass before the next method starts.


Side Effects

console.log() is considered a side effect because it performs I/O.

The callbacks not only return values but also print to the console, making their execution order visible.

Time Complexity

map()    -> O(n)

filter() -> O(n)

reduce() -> O(n)

Overall Time Complexity

O(n)

Although there are three separate passes over the array, Big-O ignores constant factors.
*/