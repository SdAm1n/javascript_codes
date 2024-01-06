"use strict";
// function wordBlanks(noun, adj, verv, adv) {

//     return "The " + adj + " " + noun + " " + verv + " " + adv + ".";
// }

// console.log(wordBlanks("dog", "big", "ran", "quickly"));

// var array = ["John", 23];
// console.log(array[0]);
// array.push("dog");
// console.log(array);
// array.pop();
// console.log(array);
// array.shift();
// console.log(array);
// array.unshift("happy");
// console.log(array);

function NL(arr, item) {
    if (item == 6) {
        return undefined;
    }
    arr.push(item);
    return arr.shift();
}

var arr = [1, 2, 3, 4, 5];
console.log("Before: " + arr);
console.log("Before: " + JSON.stringify(arr));
console.log(NL(arr, 7));
console.log("After: " + JSON.stringify(arr));


let baka = "baka";
console.log(baka);

const m = () => new Date();
console.log(m());


let obj = { a: 1, b: 2, c: 3 };

const { a: A, b: B, c: C } = obj;

console.log(A);
console.log(obj);