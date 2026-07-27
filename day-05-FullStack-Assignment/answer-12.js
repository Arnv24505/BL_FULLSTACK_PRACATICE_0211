
//  Part 1:
 function outer() {
   var x = 10;
   function inner() {
     console.log(x);
   }
   x = 20;
   return inner;
 }
 var fn = outer();
 fn();

//  OUTPUT: 20
//  EXPLANATION: Closures hold a reference to the variable environment itself, not a snapshot of the variable's value when the function was defined. By the time `inner()` is called via `fn()`, `x` has already been reassigned to 20.

//  Part 2:
 for (var i = 0; i < 3; i++) {
   (function(i) {
     setTimeout(function() {
       console.log(i);
     }, i * 1000);
   })(i);
 }
/*
 OUTPUT:
 0 (logged immediately)
 1 (logged after 1 second)
 2 (logged after 2 seconds)

 EXPLANATION: The IIFE executes synchronously on every loop iteration, creating a distinct function scope that binds the current value of `i` to its parameter `i`. The `setTimeout` closure references this scoped parameter value rather than the global `var i`. The delay (`i * 1000`) scales for each iteration (0ms, 1000ms, 2000ms).
*/