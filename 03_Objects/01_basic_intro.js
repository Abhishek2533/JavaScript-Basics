// OBJECT


// Symbol data type
const mySym = "key1";

// object literals
const person = {
    name: 'John',
    age: 30,
    [mySym]: "hello"    // way to define symbol data type
};

// ACCESSING OBJECTS
console.log(person["name"]);   // accessing using brackets notation
console.log(person.age);       // accessing directly by dot notation
console.log(person[mySym]);     // accessing a property defined with a symbol

// Change the values
person.name = 'world'


// FREEZE OBJECT
Object.freeze(person)      // freezes an object making it non-extensible and its properties non-configurable (read only)
// Object.freeze(person)   --->   // freezes an object making it immutable


// function in objects
function getPerson() {
    return {
        name: 'Jane',
        age: 25
    }
}
let john = getPerson();
console.log(john.name);


person.greeting = function () {
    console.log("Hello User");
}
console.log(person.greeting);   // do not throws error but returns anonymus object ...... this is wrong way
console.log(person.greeting()); // this is right way