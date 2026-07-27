function sum(...numbers) {
  return numbers.reduce((total, curr) => total + curr, 0);
}

const arr = [1,2,3]
console.log(sum(...arr));


/*
 Advantages of Rest Parameters over `arguments`:
 1. Real Array Instance: Rest parameters return a true JavaScript Array (supporting methods like .reduce(), .map(), .filter()), whereas `arguments` is an array-like object.
 2. Arrow Function Compatibility: Arrow functions do not have their own `arguments` object, but rest parameters work seamlessly in them.
 3. Explicit Function Signature: Rest parameters clearly document that a function accepts variable arguments and can be used to gather only trailing parameters (e.g., `fn(first, ...rest)`).
*/