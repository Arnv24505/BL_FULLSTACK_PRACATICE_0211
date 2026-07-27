/*
 Original Output: 3, 3, 3
 Explanation: All inner functions close over the same globally-scoped `i` variable, which equals 3 after the loop finishes.
*/

// Fix 1: Using `let` (ES6)
var funcsLet = [];
for (let i = 0; i < 3; i++) {
  funcsLet.push(function() {
    console.log(i);
  });
}

// Fix 2: Using an IIFE (ES5 style)
var funcsIIFE = [];
for (var i = 0; i < 3; i++) {
  (function(index) {
    funcsIIFE.push(function() {
      console.log(index);
    });
  })(i);
}