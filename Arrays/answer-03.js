//* Q3
const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const str = input[2];

// a)
let sum=0;
let maxSum=nums[0];
for(let num of nums){
    sum=Math.max(num, sum+num);
    maxSum=Math.max(sum,maxSum);
}
console.log(maxSum);


// b)
let i=0, j=0;
let set = new Set();

let characters = str.split('');
let length=0;
let maxLength=0;
while(j<characters.length){
    while(set.has(characters[j])){
        set.delete(characters[i]);
        i++;
    }
    set.add(characters[j]);
    length = j-i+1;
    maxLength = Math.max(maxLength, length)
    j++;
}

console.log(maxLength);
