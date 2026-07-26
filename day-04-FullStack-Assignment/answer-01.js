// Method 1: Using Symbol.iterator

function range(start, end) {
    return {
        start,
        end,

        [Symbol.iterator]() {
            let current = this.start;
            let last = this.end;

            return {
                next() {
                    if (current <= last) {
                        return {
                            value: current++,
                            done: false
                        };
                    }

                    return {
                        done: true
                    };
                }
            };
        }
    };
}

console.log("Using Symbol.iterator:");

for (let num of range(1, 5)) {
    console.log(num);
}


// Method 2: Using Generator Function

function* rangeGenerator(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

console.log("\nUsing Generator:");

for (let num of rangeGenerator(1, 5)) {
    console.log(num);
}