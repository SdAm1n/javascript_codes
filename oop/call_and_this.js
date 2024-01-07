function SetUser(username) {
    this.username = username;
    console.log("called SetUser");
}

function createUser(username, email, password) {
    SetUser.call(this, username);

    this.email = email;
    this.password = password;
}

const user1 = new createUser("user1", "user1@gmail.com", "123456");
console.log(user1);
