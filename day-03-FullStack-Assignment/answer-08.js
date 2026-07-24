const newObj = {

    value: 42,

    getValue() {
        return this.value;
    },

    getValueArrow() {
        return this.value;
    },

    delayedGetValue() {

        setTimeout(() => {

            console.log(this.value);

        }, 100);

    }

};

console.log(newObj.getValue());
// Output: 42

console.log(newObj.getValueArrow());
// Output: 42

newObj.delayedGetValue();
// Output: 42

/*
Why does this work?

Arrow functions inherit 'this'
from the surrounding function.

Since delayedGetValue() is called on newObj,

this === newObj

Therefore,

this.value === 42
*/