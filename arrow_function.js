const obj = {
  name: "sadman",
  fun() {
    console.log(this.name);
  },
};

const fn = function () {
  let name = "sadman";
  console.log(this.name);
};
obj.fun(); // prints the value

fn(); // prints undefined

const func = () => {
  let name = "sadman";
  console.log(name);
};

func();

const sum = (a, b) => a + b;
console.log(sum(2, 3));

const ob = () => ({ name: "sadman" });
console.log(ob());
