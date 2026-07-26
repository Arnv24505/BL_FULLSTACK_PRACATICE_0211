function memoize(fn) {

    const cache = new Map();

    return function (...args) {

        const key = JSON.stringify(args);

        if (cache.has(key)) {

            console.log("Returning from cache...");

            return cache.get(key);

        }

        console.log("Computing result...");

        const result = fn(...args);

        cache.set(key, result);

        return result;

    };

}


function slowAdd(a, b) {

    console.log("Executing slowAdd...");

    return a + b;

}


const fastAdd = memoize(slowAdd);


console.log(fastAdd(2, 3));

console.log(fastAdd(2, 3));

console.log(fastAdd(5, 10));

console.log(fastAdd(5, 10));


/*
Memory Leak Discussion

Using Map:

- Every cached result remains in memory until it is manually removed or the Map is discarded.
- If many unique inputs are cached, memory usage keeps increasing.

Using WeakMap:

- WeakMap only allows objects as keys.
- Primitive values like numbers or strings cannot be used directly.
- WeakMap is useful when the cache key is an object that may later become unreachable.
- Since this memoization uses serialized strings as keys, WeakMap is not suitable here.
*/