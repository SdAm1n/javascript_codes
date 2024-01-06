// for of

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
    //   console.log(i);
}

const greeting = "Hello World!";
for (const i of greeting) {
    //   console.log(i);
}

// Maps
const mp = new Map();
mp.set("a", 1);
mp.set("b", 2);
mp.set("c", 3);
mp.set("a", 1);

// console.log(mp);

for (const [key, value] of mp) {
    // console.log(key, value);
}

const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// for in
for (const key in obj) {
    // console.log(key, obj[key]);
}

const programming = ["JavaScript", "Python", "Java", "C++"];

for (const key in programming) {
    // console.log(key, programming[key]);
}

// higher order functions
programming.forEach(function (i) {
    // console.log(i);
});

programming.forEach((i) => {
    // console.log(i);
});

function log(i) {
    console.log(i);
}

// programming.forEach(log);

programming.forEach((item, index, arr) => {
    // console.log(item, index, arr);
});

const arrobj = [
    {
        name: "JavaScript",
        year: 1995,
    },
    {
        name: "Python",
        year: 1991,
    },
    {
        name: "Java",
        year: 1995,
    },
    {
        name: "C++",
        year: 1983,
    },
];

arrobj.forEach((item) => {
    console.log(`${item.name} from ${item.year}`);
});
