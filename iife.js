// Immediately Invoked Function Expression (IIFE)
// IIFE is a function that is executed right after it is created.

// basic function
function f0() {
  console.log("f0");
}

f0();

// named IIFE
(function f1() {
  console.log("f1");
})(); // Here semicolon is required to end the context of function expression

// anonymous IIFE
(() => {
  console.log("f2");
})();

((num) => {
  console.log(`f${num}`);
})(3);
