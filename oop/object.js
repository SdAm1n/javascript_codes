function sum(num) {
    return num + num;
}

sum.power = 2;

console.log(sum(2));
console.log(sum.power);
console.log(sum.prototype);

function User(username, scr) {
    this.username = username;
    this.scr = scr;
}

User.prototype.increment = function () {
    this.scr++;
};

User.prototype.Print = function () {
    console.log(this.username, this.scr);
};

const user1 = new User("sadman", 10);
const user2 = new User("dznt", 20);

user1.increment();
user1.Print();

// In JS, the new keyword creates instances of a constructor function not the class
