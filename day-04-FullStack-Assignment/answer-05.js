// Method 1: Using Set

function uniqueElementsSet(arr) {

    return [...new Set(arr)];

}


// Method 2: Using filter + indexOf

function uniqueElementsFilter(arr) {

    return arr.filter((value, index) => {
        return arr.indexOf(value) === index;
    });

}

const numbers = [1, 2, 3, 2, 1, 4, 5, 3, 6];

console.log("Using Set:");
console.log(uniqueElementsSet(numbers));

console.log("\nUsing filter + indexOf:");
console.log(uniqueElementsFilter(numbers));

/*
Performance Comparison

1. Set
   - Time Complexity: O(n)
   - Best choice for large arrays.

2. filter + indexOf
   - Time Complexity: O(n²)
   - Slower because indexOf searches repeatedly.

Using Set is more efficient for large datasets.
*/