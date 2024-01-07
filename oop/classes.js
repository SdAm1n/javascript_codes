class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    enc_pass() {
        return `${this.password}123`;
    }

    capitalize() {
        return this.username.toUpperCase();
    }
}

const user1 = new User("sadman", "sd@gmail.com", "abcd");
console.log(user1.enc_pass());
console.log(user1.capitalize());

// behind the scene: use function and prototype
