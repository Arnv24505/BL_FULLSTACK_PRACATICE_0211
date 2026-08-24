// a
const inputQ2 = input.join(" ");

const sentence = inputQ2;

let result = sentence.split(/\s+/).map((_, i, array)=>{
    return array[array.length-1-i]
})

console.log(result.join(" "));

// b
const inputQ2b = input;

const nQ2b = Number(inputQ2b[0]);
const numsQ2b = inputQ2b[1].split(" ").map(Number);
const kQ2b = Number(inputQ2b[2]);

console.log(numsQ2b.map((_, i, array)=>{
    return array[(i+kQ2b)%array.length]
}));
