const myMap = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

const mySet = new Set([10, 20, 30]);

console.log("Map using for...of");

for (const [key, value] of myMap) {

    console.log(key, value);

}

console.log("\nMap using forEach");

myMap.forEach((value, key) => {

    console.log(key, value);

});

console.log("\nMap using Spread");

[...myMap].forEach(([key, value]) => {

    console.log(key, value);

});

console.log("\nMap Keys");

for (const key of myMap.keys()) {

    console.log(key);

}



console.log("\nMap Values");

for (const value of myMap.values()) {

    console.log(value);

}

console.log("\nMap Entries");

for (const entry of myMap.entries()) {

    console.log(entry);

}



console.log("\nSet using for...of");

for (const value of mySet) {

    console.log(value);

}



console.log("\nSet using forEach");

mySet.forEach(value => {

    console.log(value);

});



console.log("\nSet using Spread");

[...mySet].forEach(value => {

    console.log(value);

});