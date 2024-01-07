const User = {
    _email: "sd@gmail.com",
    _password: "abc123",

    get email() {
        return this._email.toUpperCase();
    },

    set email(value) {
        this._email = value;
    },
};

const user1 = Object.create(User);
console.log(user1.email);
