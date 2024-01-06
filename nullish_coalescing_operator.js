// Nullish Coalescing Operator (??) : null, undefined

let val1;
val1 = 5 ?? 10;

console.log(val1); // 5

let val2 = null ?? 10;
console.log(val2); // 10

let val3 = undefined ?? 10;
console.log(val3); // 10

let val4 = null ?? 0 ?? 10;
console.log(val4); // 0
