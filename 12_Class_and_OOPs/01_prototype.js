let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function (){
        console.log(`Spider power is ${this.spiderman}`);
    }
}


// Inject a Object
Object.prototype.sam = function(){
    console.log(`this is sam present in all object`);
}

// Inject in Array
Array.prototype.heySam = function() {
    console.log(`Say hello`);
}

heroPower.sam();        // this is sam present in alll object
myHeros.sam();          // this is sam present in alll object

myHeros.heySam();       // Say hello
// heroPower.heySam();     // Error -> don't have function





// INHERITANCE -> access all properties of others

const User = {
    name: "sam",
    email: "sam@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport  // giving access of TeachingSupport properties
}

// Accessing all properties
Teacher.__proto__ = User        // teacher will access all properties of User ,,, this is inheritance

// Above can be written in Modern Syntax as -
Object.setPrototypeOf(TeachingSupport, Teacher);
// here -> TeachingSupport will access all properties of Teacher;