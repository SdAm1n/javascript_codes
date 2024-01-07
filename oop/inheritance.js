class User {
    constructor(username) {
        this.username = username;
    }

    get_username() {
        return this.username;
    }
}

class Admin extends User {
    constructor(username, email, password) {
        super(username);

        this.email = email;
        this.password = password;
    }

    add_user() {
        console.log(`${this.username} added`);
    }
}

const user1 = new Admin("sadman", "sadman@admin.com", "31231");
user1.add_user();

const user2 = new User("non-admin");
console.log(user2.get_username());

console.log(user1.get_username());
console.log(user1 instanceof Admin);
console.log(user1 instanceof User);
