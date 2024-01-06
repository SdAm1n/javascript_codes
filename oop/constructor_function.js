// new is constructor function

// const promise1 = new Promise();
// const date = new Date();

function User(username, logincnt, isLoggedIN) {
    // myusername = username;
    this.username = username;
    this.logincnt = logincnt;
    this.isLoggedIN = isLoggedIN;

    this.greet = function () {
        console.log(`Hello ${this.username}`);
    };

    // return this; // this is default
}

// creating new object
const user1 = new User("sadman", 10, true);
const user2 = new User("new user", 3, false);
console.log(user1);
console.log(user2);
user1.greet();

console.log(user1.constructor);
console.log(user1 instanceof User);
console.log(user1 instanceof Object);
