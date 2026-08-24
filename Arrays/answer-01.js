const fs = require("fs");
const input = fs.readFileSync(0, "utf8").trim().split("\n");

const n = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const target = Number(input[2]);

function twoSumNoD(nums, target){
    let mpp = new Map();
    let i=0;
    while(i!==nums.length){
        if(mpp.has(target-nums[i])){
            return [mpp.get(target-nums[i]),i]
        }
        mpp.set(nums[i],i);
        i++;
    }
}
function twoSumD(nums, target){
    let mpp = new Map();
    let result = [];
    let i=0;
    while(i!==nums.length){
        if(mpp.has(target-nums[i])){
            for(const idx of mpp.get(target-nums[i])) result.push([idx,i])
        }
        
        if(!mpp.has(nums[i])) mpp.set(nums[i],[]);
        mpp.get(nums[i]).push(i)
        i++;
    }
    return result;
}
function twoSumSorted(nums, target){
    let left=0
    let right=nums.length-1
    while(left<right){
        const sum = nums[left] + nums[right];
        if(sum===target) return [left,right]
        else if(sum<target) left++;
        else right--;
    }
}

console.log(twoSumNoD(nums, target));
console.log(twoSumD(nums, target));
console.log(twoSumSorted(nums, target));