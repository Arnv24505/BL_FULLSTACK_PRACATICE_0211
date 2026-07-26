const privateData = new WeakMap();


class User {

    constructor(name, password) {

        privateData.set(this, {
            name,
            password
        });

    }


    getName() {

        return privateData.get(this).name;

    }


    checkPassword(password) {

        return privateData.get(this).password === password;

    }

}

const user = new User("Alice", "secret123");

console.log(user.getName());

console.log(user.checkPassword("secret123"));

console.log(user.checkPassword("wrongpassword"));


/*
Edge Cases where trying to access private properties will result in a error because they are not publicly accessible
*/

console.log(user.name);

console.log(user.password);
