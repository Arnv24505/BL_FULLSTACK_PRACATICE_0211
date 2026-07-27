function displayUser({ name, address: { city } = {}, role = "user" } = {}) {
  console.log(`Name: ${name}, City: ${city}, Role: ${role}`);
}

/*
 Explanation:
 1. No argument passed: `displayUser()`
    - Outer default `= {}` kicks in, preventing a TypeError when destructuring undefined.
    - `name` is undefined, `city` is undefined, `role` defaults to "user".
 2. `address` is missing: `displayUser({ name: "Alice" })`
    - Nested default `address: { city } = {}` prevents an error when trying to access `city` from undefined.
    - `city` evaluates to undefined.
 3. `name` is missing: `displayUser({ address: { city: "Paris" } })`
    - `name` evaluates to undefined, while `city` gets "Paris" and `role` defaults to "user".

 Why `= {}` defaults are important:
 - Outer `= {}`: Guarantees that if the entire parameter is omitted (undefined), destructuring doesn't throw a TypeError.
 - Inner `= {}`: Guarantees that if `address` is undefined on the passed object, nested destructuring of `city` won't throw a TypeError.
*/