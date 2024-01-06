const promise1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("promise1 completed");
        resolve();
    }, 1000);
});

promise1.then(function () {
    console.log("promise1 consumed");
});

// another way to create promise
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2");
        resolve();
    });
}).then(() => {
    console.log("Async2 resolved");
});

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "user", password: "pass" });
    }, 1000);
});

promise3.then((data) => {
    console.log(data);
    console.log(data.password);
});

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "sadman", password: "1234" });
        } else {
            reject("Error Occured");
        }
    }, 1000);
});

promise4
    .then((data) => {
        console.log(data);
        return data.username;
    })
    .then((username) => {
        console.log(username);
    })
    .catch((err) => {
        console.log(err);
    })
    .finally(() => console.log("Promise4 resolved or rejected"));

const promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "promise five", password: "12345" });
        } else {
            reject("Error Occured");
        }
    }, 1000);
});

async function consumedP5() {
    try {
        const response = await promise5;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedP5();

async function github_api() {
    try {
        const response = await fetch("https://api.github.com/users/sdam1n");

        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Err: ", error);
    }
}

github_api();
