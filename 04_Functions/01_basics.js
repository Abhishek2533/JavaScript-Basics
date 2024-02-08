// FUNCTIONS

// Define function
function myFun() {
    console.log("Hello World");
}

// call function
myFun();



// Programs using functions

// Example 1
function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, 4);        // 7
addTwoNumbers(3, "4");      // 34
addTwoNumbers(3, "a");      // 3a
addTwoNumbers(3, null);     // 3

// naming -> when function define/declare - parameters(params) ,,, when function call - arguments

// Beginner's mistake ---
const result = addTwoNumbers(3, 4);
console.log(result); // They expect 7 in result but this is wrong ,,, result have UNDEFINED here

// Concept -> 
function addTwoNumber(number1, number2) {
    // let results = number1 + number2;
    // return results;

    // above line simplified (reducing memory of creating new variable) as -
    return number1 + number2;
}

// now when we console then
const results = addTwoNumber(3, 4);
console.log(results);   // output -> 7



// Example 2
function loginUserMessage(usename) {
    return `${usename} just logged in`
}

console.log(loginUserMessage("sam"));       // output -> sam just logged in
console.log(loginUserMessage(""));       // output ->  just logged in
console.log(loginUserMessage());       // output ->  undefined just logged in
// here null will not console as it is not define , so undefined
// if define username = "hello" in parameters then minimum value of username is hello,,, otherwise when arguments is given then this value will be overwritten



// Example 3
function calclateCartPrice(...num) {
    return num;
}

console.log(calclateCartPrice(200, 300, 400));      // output -> [ 200, 300, 400 ]

// when more them 1 arguments (multiple values) is passed ( because we don't know about user input ) then we use REST OPERATOR ( ...num )
// this (...num) will give an Array of arguments on which we can perform operations



// Passing an Object in Functions
const userDetails = {
    name: "Sam",
    age: 25,
};

function getUserNameAndAge(anyObject) {
    return `Name is ${anyObject.name} and Age is ${anyObject.age}`;
}
console.log(getUserNameAndAge(userDetails))     // output -> Name is Sam and Age is 25

// Similarly we can use array
const arr = ["John", "Doe"];
function fullName(arr) {
    return `${arr[0]} ${arr[1]}`;
}
console.log(fullName(arr));        // output -> John Doe
