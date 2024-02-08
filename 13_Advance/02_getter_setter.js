// GETTER SETTER IN CLASS
// Getter and Setter are used to access private data members of a class.

// we use (_) to make value private which is used to avoid maximum call size exceed

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    // GETTER -> to get the access
    get password() {
        return this._password.toUpperCase()  // changing value when accessing
    }

    // SETTER -> to set the access value
    set password(value) {
        return this._password = value;
    }
}

const sam = new User("sam@google.com", "hello");
console.log(sam.password);









// GETTER SETTER IN FUNCTIONS
/*
Getter and Setter can also be written outside the class in functions.
They work exactly like methods but with special names.
*/

function Login(email, password) {
    this._email = email;
    this._password = password;

    // get set is allowed by Object itself -> defineProperty -> getter setter
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },

        set: function (value) {
            this._email = value
        }
    });
}

const world = new Login("hello@world", "javascript");
console.log(world.email);








// GETTER SETTER - OBJECT BASED
const Hello = {
    _email: 'sam@sam.com',
    _password: 'abc',

    get email() {
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value;
    }
}

const vro = Object.create(Hello);
console.log(vro.email);