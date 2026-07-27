/*
 Explanation:
 The spread operator creates a shallow copy, copying top-level primitive values by value,
 but copying nested objects/arrays by reference. Therefore, modifying a nested object in the copy
 affects the original object.
*/

// Demonstration of Shallow Copy issue:
const originalObj = { a: 1, nested: { b: 2 } };
const copyObj = { ...originalObj };
copyObj.nested.b = 99; // Affects originalObj.nested.b too!

// True Deep Clone function for JSON-serializable data:
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const deepCloned = deepClone(originalObj)
deepCloned.nested.b = 100;
