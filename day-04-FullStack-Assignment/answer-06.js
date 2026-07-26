function union(setA, setB) {

    return new Set([...setA, ...setB]);

}

function intersection(setA, setB) {

    return new Set(
        [...setA].filter(value => setB.has(value))
    );

}


function difference(setA, setB) {

    return new Set(
        [...setA].filter(value => !setB.has(value))
    );

}


function symmetricDifference(setA, setB) {

    const onlyInA = difference(setA, setB);

    const onlyInB = difference(setB, setA);

    return union(onlyInA, onlyInB);

}

const setA = new Set([1, 2, 3]);

const setB = new Set([2, 3, 4]);

console.log("Union:");
console.log(union(setA, setB));

console.log("\nIntersection:");
console.log(intersection(setA, setB));

console.log("\nDifference:");
console.log(difference(setA, setB));

console.log("\nSymmetric Difference:");
console.log(symmetricDifference(setA, setB));