// Greet Arrow Function

const greetArrow = name => "Hello, " + name;

console.log(greetArrow("Alice"));
// Output: Hello, Alice


// Multiplication Arrow Function

const multiplyArrow = (a, b) => a * b;

console.log(multiplyArrow(5, 6));
// Output: 30


/*
The callback inside setInterval() has its own 'this'.

Therefore, 'this' does not refer to the Person object.
*/

// Corrected using Arrow Function

function Person() {

    this.age = 0;

    setInterval(() => {

        this.age++;
        console.log(this.age);

    }, 1000);

}

const person = new Person();

/*
Output:

1
2
3
4
...

Explanation

Arrow functions inherit 'this' from the surrounding scope.

Here, 'this' refers to the Person object,
so age increments correctly every second.

Behavioral Differences

Traditional Function

    Has its own this
    Can be used as constructor
    Has arguments object

Arrow Function

    Inherits this from parent scope
    Cannot be used as constructor
    Does not have its own arguments object
*/