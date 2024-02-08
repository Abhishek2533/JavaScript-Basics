class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    // static keyword is use to prevent the porperties to access 
    static createId() {
        return `123`
    }
}

const sam = new User("sam");
// console.log(sam.createId());


class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const sensei = new Teacher("Sensei", "sensei@gmail.com");
console.log(sensei.logMe());