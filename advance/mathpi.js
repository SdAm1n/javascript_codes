// Can we change the value of Math.PI?
// No but the answer is descriptor not it is a constant

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(descriptor);

// writable is false in Math.PI descriptor

const User = {
    name: "Sadman",
    isAvailabe: true,
    age: 18,

    get_info: function () {
        console.log(
            `Name: ${this.name} Age: ${this.age} Available: ${this.isAvailabe}`
        );
    },
};

console.log(Object.getOwnPropertyDescriptor(User, "name"));
console.log(Object.getOwnPropertyDescriptors(User));

// Change properties of User
Object.defineProperty(User, "name", {
    enumerable: false,
});

console.log(Object.getOwnPropertyDescriptor(User, "name"));

for (let [key, value] of Object.entries(User)) {
    if (typeof value !== "function") {
        console.log(`${key}: ${value}`);
    }
}
