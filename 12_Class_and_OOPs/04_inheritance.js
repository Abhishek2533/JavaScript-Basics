class User {
    constructor(username) {
        this.username = username;
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)     // super referes to the extended class
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`New Course is added by ${this.username}`);
    }
}

const sam = new Teacher("sam", "sam@google.com", "123");
sam.addCourse();
sam.logMe();

const newUser = new User("user");
// newUser.addCourse();        // it don't have access of addCouser
newUser.logMe();


console.log(sam instanceof newUser);