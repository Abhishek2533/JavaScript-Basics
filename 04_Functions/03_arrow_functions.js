const user = {
    name: "sam",
    price: 99,

    welcomeMessage: function () {
        console.log(`${this.name}, welcome to website`);        // this refers current context
        console.log(this);      // output -> user{}
    }
}

user.welcomeMessage();

// change the context
user.name = "hello";
user.welcomeMessage();

console.log(this);  // output -> {} - empty object



// Difference in window's THIS and engine(node) THIS


/*
- In browser JS, when we run script without any function then 'this' points to the WINDOW OBJECT.
- But if we call a FUNCTION from within another function then 'THIS' inside that function points to whatever object called it.
- But if we use a FUNCTION inside that script then 'THIS' POINTS TO THE OBJECT WHICH IS CALL STATEMENT OF THAT FUNCTION OR WE CAN SAY IT POINTS TO THE OBJECT WHICH IS PROVIDED AS AN ARGUMENT TO THE FUNCTION.
*/


/*
- When a file is directly executed using node like below
1. Then 'this' will point to the GLOBAL OBJECT i.e., {} (empty object).
2. If you are running using util module or vm module etc. Then 'this' will point to the MODULE.exports object.
3. It also creates a SYSTEM object which has some properties of windows objects like process, require etc..
4. If you use call or apply on global it will point to whatever value you pass in first argument.
5. If you do new on a function then this will point to newly created object.
6. If you just write normal javascript outside functions then this will be undefined.
7. So there are two types of js one runs in BROWSER and other runs in NODE so they have different behavior for this keyword.
8. Whenever we create a function if there is no explicit reference to this then js will take implicit one.
9. If there is no function then this is always going to be undefined.
10. Whenever we create a variable/function in js it belongs to global object.
11. If there is no function then 'this' will be global object otherwise not.
12. So basically if there is no function then this will be undefined else it will be what ever object that is calling that function.
13. When callback function is called from library/module then this depends upon how that module was designed.
14. Avoid using this in pure js because it can lead to confusion if used incorrectly.
*/







// ARROW FUNCTIONS



function one() {
    let user = "sam";
    console.log(this.user);         // output ---> undefined
}
one();



// same in arrow functions

// STYNTAX
// const funcName = (param1, param2 ...) => {code block};

const one = function () {
    let user = "sam";
    console.log(this.user);         // output ---> undefined
}
one();





let obj = {                          // creating an object
    name: "Sam",
    showName: function () {        // method inside the object
        console.log("Hi I am ", this.name);  // output --> Hi I am Sam
    }
};

obj.showName();

// arrow function version
obj.showNameArrow = () => console.log("Hi I am ", this.name);   // output --> ReferenceError: Cannot access 'name' before initialization



two = function () {               // creating a standalone function
    console.log("Hi I am ", this.name);     // output --> TypeError: Cannot read property 'name' of undefined
}

two();                            // output --> TypeError: two is not defined
console.log(window.two());       // output --> Hi I am Sam


/*
In above example when we are calling two() directly without prefixing window it gives error because two is not present in the current scope but it is present
* In arrow functions this refers to window object by default unlike regular functions where this refers to undefined.
* In arrow functions this refers to window object so to avoid errors
* we need to explicitly bind this to some other object.
*/

obj.showNameArrowWindow = () => console.log("Hi I am Window - ", this.name);
obj.showNameArrowObj = () => console.log("Hi I am Object - ", this.name);
obj.showNameArrowWindow();      // output --> Hi I am Window -  Sam
obj.showNameArrowObj();         // output --> Hi I am Object -  Sam

arrowTwo = () => console.log("Hi I am ", this.name);
console.log(arrowTwo());           // output --> Uncaught TypeError: Cannot read property 'name' of undefined



// EXPLICIT RETURN - return keyword is must with curly braces
// IMPLICIT RETURN - no need to write return (without curly braces) or ( with paranthesis )
three = (x, y) => x + y;
console.log(three(2,3));             // output --> 5
four = (x ,y=10 )=> x+y;              // if no argument passed then it will take value from right side
console.log(four(4));                // output --> 4
console.log(four(4,8))               // output --> 12