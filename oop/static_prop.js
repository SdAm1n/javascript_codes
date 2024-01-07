class User {
    constructor(username) {
        this.username = username;
    }

    get_username() {
        return this.username;
    }

    static createID() {
        return `1234`;
    }
}

const user1 = new User("sadman");
// console.log(user1.createID()); would have worked if createID was not static
