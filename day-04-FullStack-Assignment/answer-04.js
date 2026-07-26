/*
* Map
1. Map allows any data type as key.

2. Map maintains insertion order.

3. Map has built-in size property.

4. Map is directly iterable.

5. Map has methods like set(), get(), has(), delete().

*Object
1. Object keys are strings or symbols.

2. Object order is more complex.

3. Object requires Object.keys(obj).length.

4. Object is not iterable.

5. Object uses property access.
*/

function countWordFrequencyObject(text) {

    const words = text.toLowerCase().split(" ");

    const frequency = {};

    for (const word of words) {

        if (frequency[word]) {
            frequency[word]++;
        } else {
            frequency[word] = 1;
        }

    }

    return frequency;
}

function countWordFrequencyMap(text) {

    const words = text.toLowerCase().split(" ");

    const frequency = new Map();

    for (const word of words) {

        if (frequency.has(word)) {
            frequency.set(word, frequency.get(word) + 1);
        } else {
            frequency.set(word, 1);
        }

    }

    return frequency;
}


const text = "apple banana apple orange banana apple";

console.log("Object Version:");
console.log(countWordFrequencyObject(text));

console.log("\nMap Version:");
console.log(countWordFrequencyMap(text));