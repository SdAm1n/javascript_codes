// filter
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const nums = arr.filter((i) => i > 4);
console.log(nums);

const n = [];
arr.forEach((i) => {
    if (i > 4) {
        n.push(i);
    }
});
console.log(n);

const books = [
    { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
    { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
    { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
    { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
    { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
    { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
    { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
    { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
    { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
];

const userbooks = books.filter((book) => book.genre == "Non-Fiction");

console.log(userbooks);

const newNums = arr.map((i) => i + 10);
console.log(newNums);

const nm = arr
    .map((i) => i * 10)
    .map((i) => i + 1)
    .filter((i) => i > 50);

console.log(nm);

// reduce

let sum = arr.reduce(function (acc, currval) {
    // console.log(acc, currval);
    return acc + currval;
}, 0);

sum = arr.reduce((acc, currval) => acc + currval, 0);

console.log(sum);

const shoppingCart = [
    { product: "phone", price: 699 },
    { product: "Screen Protector", qty: 1, price: 9.98 },
    { product: "Memory Card", qty: 2, price: 20.99 },
];

const total = shoppingCart.reduce((acc, item) => acc + item.price, 0);

console.log(total);
