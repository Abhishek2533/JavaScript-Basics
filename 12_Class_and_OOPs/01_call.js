function setUsername(username){
    this.username = username;
}

function createUser(username, email, password) {
    // setUsername(username);   // we expect that this will run but actually this is not called so we call this explicitly bt -
    setUsername.call(this, username); // now this is called
    this.email = email;
    this.password = password;
}

const user = new createUser("sam", "sam@google.com", 123);
console.log(user);