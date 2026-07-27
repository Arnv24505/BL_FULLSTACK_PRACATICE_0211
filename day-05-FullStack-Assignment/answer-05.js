const person = { name: "Alice" };
const numbers = [1, 2, 3];

1. person.name = "Bob";
// VALID: `const` prevents reassigning the variable reference, but the underlying object remains mutable.

2. person = { name: "Charlie" };
// INVALID (TypeError): Reassigning a `const` variable reference is prohibited.

3. numbers.push(4);
// VALID: Mutating array contents does not change the reference to the array.

4. numbers = [5, 6, 7];
// INVALID (TypeError): Reassigning the array variable reference is prohibited.

5. Object.freeze(person); person.name = "Dave";
// WHAT HAPPENS: In non-strict mode, it fails silently and `person.name` remains "Bob". In strict mode, it throws a TypeError.