const students = new Map();

function addGrade(name, score) {

    if (!students.has(name)) {
        students.set(name, []);
    }

    students.get(name).push(score);
}

function getAverage(name) {

    if (!students.has(name)) {
        return "Not found";
    }

    const scores = students.get(name);

    const total = scores.reduce((sum, score) => sum + score, 0);

    return total / scores.length;
}

function getTopper() {

    let topper = "";
    let highestAverage = -Infinity;

    students.forEach((scores, name) => {

        const average =
            scores.reduce((sum, score) => sum + score, 0) / scores.length;

        if (average > highestAverage) {
            highestAverage = average;
            topper = name;
        }

    });

    return {
        name: topper,
        average: highestAverage
    };
}

addGrade("Alice", 90);
addGrade("Alice", 80);

addGrade("Bob", 100);
addGrade("Bob", 95);

addGrade("Charlie", 70);

console.log("Alice Average:", getAverage("Alice"));
console.log("Bob Average:", getAverage("Bob"));
console.log("Topper:", getTopper());