// Using for loop

function filterFalsy(arr) {
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }

    return result;
}

console.log(filterFalsy([0, 1, false, 2, "", 3, null, undefined, NaN, 4]));
// Output: [1, 2, 3, 4]


// Using reduce()

function filterFalsyReduce(arr) {
    return arr.reduce((acc, currentValue) => {
        if (currentValue) {
            acc.push(currentValue);
        }
        return acc;
    }, []);
}

console.log(filterFalsyReduce([0, 1, false, 2, "", 3, null, undefined, NaN, 4]));
// Output: [1, 2, 3, 4]

/*
Comparison with native filter()

for loop      -> O(n)
reduce()      -> O(n)
filter()      -> O(n)

All three have the same time complexity.
*/