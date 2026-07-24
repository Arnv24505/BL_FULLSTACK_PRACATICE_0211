const numbers = [2, 3, 4, 5];

function reduceOperation(arr, operation) {

    switch (operation) {

        case "sum":
            return arr.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);

        case "product":
            return arr.reduce((accumulator, currentValue) => {
                return accumulator * currentValue;
            }, 1);

        case "max":
            return arr.reduce((accumulator, currentValue) => {
                return currentValue > accumulator? currentValue: accumulator;
            });

        default:
            return "Invalid Operation";
    }
}

console.log(reduceOperation(numbers, "sum"));
// Output: 14

console.log(reduceOperation(numbers, "product"));
// Output: 120

console.log(reduceOperation(numbers, "max"));
// Output: 5