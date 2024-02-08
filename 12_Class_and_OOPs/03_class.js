// class User {
//     // Constructor -> calls whenever we use/call class
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const sam = new User("sam", "sam@google.com", "123");

// console.log(sam.encryptPassword());
// console.log(sam.changeUsername());



// BEHIND THE SCENE ABOVE IS -
function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`
}

User.prototype.changeUsername = function () {
    return `${this.username.toUpperCase()}`
}

const hello = new User("hello", "hello@google.com", "123");

console.log(hello.encryptPassword());
console.log(hello.changeUsername());