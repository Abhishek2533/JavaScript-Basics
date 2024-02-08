// PROMISE ->   The promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
//              Promise is a way to handle asynchrony in a more structured and controlled manner, providing better control over application flow rather than relying on callbacks. Promises are particularly useful when dealing with multiple async operations that depend on each other or need to be executed sequentially.
const promiseOne = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Async task is completed');
        resolve();  // connected to then
    }, 1000);
});



// resolve -> then()
promiseOne.then(function () {
    console.log("promise consume");
});



new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async task 2");
        resolve();
    }, 1000);
}).then(function () {
    console.log("Async 2 resolved");
});



const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "Sam", email: "sam@exmaple.com" });
    }, 1000);
});
// data consumption
promiseThree.then(function (user) {
    console.log(user);
});



const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Sam", email: "sam@exmaple.com" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.log(error);
}).finally(() => {                  // finally runs in both case resolve and reject
    console.log("The promise is Either resolve or rejectes Finally");
})

// Don't do like this -
// const username = promiseFour.then((user) => {
//     console.log(user);
//     return user.username;
// });
// console.log(username);





const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "hello world", email: "hw@exmaple.com" });
        } else {
            reject("ERROR: world is not find");
        }
    }, 1000);
});


// then catch -> async await (try catch)
async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive();




// fetch
async function getAllUser() {
    try {
        const response = await fetch('https://api.github.com/users/octocat');
        const data = await response.json();         // NOTE -> here response.json also take time to convert data ,, so here also we need to await this call
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getAllUser();


// Above function in then & catch method -
fetch('https://api.github.com/users/octocat')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})