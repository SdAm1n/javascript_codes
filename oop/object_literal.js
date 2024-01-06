// object literal
const user = {
    // properties
    username: "sadman",
    logincnt: 3,
    signedIN: true,

    // methods
    getUser: function () {
        console.log("username:", this.username);
        console.log(this);
    },
};

console.log(user.username);
// console.log(user.getUser());
user.getUser();
