// singleton

// objects literals

const mySym = Symbol("key1");

// Object.create
const jsUsers = {
    name: "sadman",
    age: 24,
    [mySym]: "mykey1",
    location: "Dhaka",
    email: "sadman@ieee.com",
    isLoggedIn: true,
    lastLogin: ["monday", "saturday"]
}

console.log(jsUsers["email"]); // good way
console.log(jsUsers.email); // bad way why? --> "string" : "string".
console.log(jsUsers[mySym]);

jsUsers.email = "change@ieee.com";
// Object.freeze(jsUsers); // freeze the object
jsUsers.email = "change2@ieee.com";

console.log(jsUsers);

jsUsers.greeting = function () {
    console.log(`Hello ${this.name}`);
}
console.log(jsUsers.greeting());

