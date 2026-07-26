const obj = {};

const map = new Map();


obj[5] = "number";

obj["5"] = "string";


map.set(5, "number");

map.set("5", "string");


console.log(obj[5]);

console.log(obj["5"]);

console.log(map.get(5));

console.log(map.get("5"));

console.log(Object.keys(obj).length);

console.log(map.size);


/*
Output:

string
string
number
string
1
2


Explanation:

Object:

obj[5] becomes obj["5"] because object keys are automatically converted to strings.

So, obj[5] = "number";

is overwritten by

obj["5"] = "string";

Therefore both access the same property.


Map:

Map does not convert key types.

Number 5 and String "5" are treated as two completely different keys.

Therefore,

map.get(5) returns "number"

map.get("5") returns "string"

Object.keys(obj).length is 1 because there is only one property: "5"

map.size is 2 because Map stores both keys separate.
*/