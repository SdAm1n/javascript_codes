class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(pass) {
        this._password = pass;
    }
}

const user1 = new User("John", "john@gmail.com", "abcd");
console.log(user1.password);
