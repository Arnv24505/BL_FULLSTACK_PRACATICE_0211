//* Q4 
// A

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf8").trim().split(/\s+/).map(Number);
// const n = input[0];

// const intervals = [];

// for (let i = 0; i < n; i++) {
//     const start = input[2 * i + 1];
//     const end = input[2 * i + 2];

// intervals.push([start, end]);
// }
// if(n===0){
//     console.log([]);
//     process.exit();
// }
// let curr = intervals[0]
// let res = []

// for(let i=1; i<intervals.length; i++){
//     let next = intervals[i]

//     if(curr[1]>=next[0]){
//         curr[1]=Math.max(curr[1],next[1])
//     }
//     else{
//         res.push(curr)
//         curr = next
//     }
// }

// res.push(curr)

// console.log(res);

// B

class Meeting{
    constructor(title, start, end){
        this.title=title
        this.start=start
        this.end=end
    }

    overlaps(otherMeeting){
        return this.start < otherMeeting.end && otherMeeting.start < this.end
    }

    static fromArray([title, start, end]) {
        return new Meeting(title, start, end);
    }
}

const meeting1 = new Meeting("Standup", 9, 9.5)
const meeting2 = new Meeting("Interview", 9.25, 10)

console.log(meeting1.overlaps(meeting2));

/*
    1. What happens when new Meeting(...) is used?

        Conceptually, JavaScript performs these steps:

        1. Create a new object
            A fresh empty object is created.
        2. Link its prototype
            The new object's internal [[Prototype]] is set to Meeting.prototype.
            So it can access methods defined on Meeting.prototype.
        3. Bind this
            Inside the Meeting constructor, this refers to the newly created object.
        4. Run the constructor
            Meeting("Standup", 9, 9.5) executes with those arguments.
            Properties such as title, start, and end are assigned to the new object.
        5. Return the result
            Normally, the newly created object is returned.
            If the constructor explicitly returns another object, that object becomes the result instead.
            Returning a primitive does not replace the newly created object.
    2. Predict the output
        true
*/