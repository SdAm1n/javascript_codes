let myname = "sadman    ";

console.log(myname.trim().length);
console.log(myname.length);

let villains = ["Joker", "Lex Luthor", "Magneto", "Voldemort", "Sauron"];

let villan_power = {
    Joker: "Insanity",
    "Lex Luthor": "Super Brain",
    Magneto: "Magnetism",
    Voldemort: "Magic",
    Sauron: "Magic",

    getJokerPower: function () {
        console.log(`Joker's power is ${this.Joker}`);
    },
};

Object.prototype.sadman = function () {
    console.log("Sadman is present in every object");
};

villan_power.sadman();
villains.sadman();

Array.prototype.hisadman = function () {
    console.log("Sadman is present in every array");
};

villains.hisadman();
// villain_power.hisadman(); will not work : Array --> Object --> null

// Inheritance (Prototypal Inheritance)

const User = {
    name: "user",
    email: "user@user.com",
};

const Teacher = {
    isAvailable: true,
};

const TeachingSupport = {
    makeVideo: false,
    language: "English",
};

const TA = {
    isTA: true,
    fullTime: true,
    __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// Modern Approach
Object.setPrototypeOf(TeachingSupport, Teacher);

let Username = "new user   ";
String.prototype.onlyChar = function () {
    console.log(`${this}`);
    console.log(`True Length: ${this.trim().length}`);
};

Username.onlyChar();
myname.onlyChar();
