// Snippet 1:
console.log(a); // OUTPUT: undefined
var a = 10;
// REASON: `var` is hoisted to the top of its scope initialized with `undefined`.

// Snippet 2:
console.log(b); // OUTPUT: ReferenceError: Cannot access 'b' before initialization 
let b = 20;
// REASON: `let` is hoisted, but resides in the Temporal Dead Zone (TDZ) until execution reaches its declaration.

// Snippet 3:
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100); 
}
// OUTPUT: 3, 3, 3
// REASON: `var` is function/globally scoped. The loop shares a single instance of `i`. By the time `setTimeout` executes, `i` has reached 3.

// Snippet 4:
for (let j = 0; j < 3; j++) { 
    setTimeout(() => console.log(j), 100); 
}
// OUTPUT: 0, 1, 2
// REASON: `let` creates a new block-scoped binding for `j` during each iteration of the loop, preserving its value inside the closure.