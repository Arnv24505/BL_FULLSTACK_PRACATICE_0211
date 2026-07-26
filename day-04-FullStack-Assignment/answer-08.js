/*
===========================================
Q8. WeakMap vs Map - Garbage Collection
===========================================

Explanation:

1. WeakMap keys must be objects. Primitive values like numbers and strings cannot be used as keys.

2. WeakMap keys are held weakly. If there are no other references to a key object, it becomes eligible for garbage collection.

3. WeakMap is not iterable. It does not provide:
   - size
   - keys()
   - values()
   - entries()
   - forEach()

   This prevents exposing objects that may have already been garbage collected.

4. Map holds strong references to its keys. As long as the Map exists, its keys remain in memory.
*/


let map = new Map();

let obj1 = {
    id: 1
};

map.set(obj1, "Stored in Map");

console.log("Map has object:", map.has(obj1));

/*
Even if obj1 loses its external reference,
the Map still keeps it alive.
*/

obj1 = null;

console.log("Map Size:", map.size);



let weakMap = new WeakMap();

let obj2 = {
    id: 2
};

weakMap.set(obj2, "Stored in WeakMap");

console.log("WeakMap has object:", weakMap.has(obj2));

/*
After removing the only external reference, the object becomes eligible for garbage collection.

We cannot directly verify garbage collection because JavaScript performs it automatically.
*/

obj2 = null;

/*
WeakMap does not provide size or iteration methods.

The following would cause errors:

weakMap.size
weakMap.keys()
weakMap.forEach()

This is intentional because entries may disappear at any time after garbage collection.
*/