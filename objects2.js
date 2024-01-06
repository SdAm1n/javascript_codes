const tuser = new Object(); // singleton object

// const tuser = {}; // non singleton object

tuser.id = "23";
tuser.name = "sadman";
tuser.isLoggedIn = true;

// console.log(tuser);

const ruser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "sadikul",
      lastname: "sadman",
    },
  },
};

// console.log(ruser.fullname.userfullname.firstname);

const obj1 = { 1: "one", 2: "two", 3: "three" };
const obj2 = { 4: "four", 5: "five", 6: "six" };

// const obj3 = { ...obj1, ...obj2 };
const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "some@gmail.com",
  },
  {
    id: 2,
    email: "some@gmail.com",
  },
  {
    id: 3,
    email: "some@gmail.com",
  },
];

// users[0].email;
// console.log(tuser);
// console.log(Object.keys(tuser));
// console.log(Object.values(tuser));
// console.log(Object.entries(tuser));

// console.log(tuser.hasOwnProperty("id"));

// Object Destructuring

const course = {
  coursename: "js",
  price: 200,
  courseInstructor: "sadman",
};

const { courseInstructor: cins } = course;

console.log(cins);

function handleObj(anyobject) {
  console.log(`coursename ${anyobject.coursename}, price ${anyobject.price}`);
}

handleObj(course);
