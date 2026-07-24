const arr = [
    [1,2],
    [3,4],
    [5,6]
];


// Using reduce()

const leftToRight = arr.reduce((accumulator, currentValue) => {

    return accumulator.concat(currentValue);

}, []);

console.log(leftToRight);

// Output:[1,2,3,4,5,6]


// Using reduceRight()

const rightToLeft = arr.reduceRight((accumulator, currentValue) => {

    return accumulator.concat(currentValue);

}, []);

console.log(rightToLeft);

// Output:[5,6,3,4,1,2]


/*
Explanation

reduce()

Starts from:

[1,2]

↓

Adds

[3,4]

↓

Adds

[5,6]


Result

[1,2,3,4,5,6]



reduceRight()

Starts from:

[5,6]

↓

Adds

[3,4]

↓

Adds

[1,2]


Result

[5,6,3,4,1,2]


When should reduceRight() be used?

    Reverse traversal
    Right-associative operations
    Parsing expressions
    Processing nested structures from the end
*/