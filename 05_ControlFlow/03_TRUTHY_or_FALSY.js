const email = "sam@gmail.com";

if (email) {
    console.log("user login");
} else {
    console.log("not user");
}
// output -> user login ,,, it assumes string as true


/* --------- All falsy values --------- */

// let value0 = false; // falsy
// let value1 = 0 || -0; // falsy
// let value2 = ""; // falsy
// let value3 = undefined; // falsy
// let value4 = null; // falsy
// let value5 = BigInt 0n; // falsy
// let value6 = NaN;   // falsy

// other than these are TRUTHY values


/* ----------- TRUTHY VALUES examples ------------ */

// "0", 'false', " ", [], {}, function(){}

// numbers other than zero and NaN
// strings that aren’t empty
// objects or arrays with length greater than zero
// empty functions 
// So if we want to check whether an e-mail is present or not, we can use a strict equality operator === which checks both value
// The Boolean object
// A truthy value is a value that becomes true when passed to Boolean() 


// check object
const emptyObjobj = {};
if (Object.keys(emptyObj).length === 0) {       // Object.keys(emptyObj) will return an array and then we use length property to check empty or not
    console.log("Object is empty");   
}




// Nullish Coalescing Operator (??) : null & undefined
let x = null ?? 7;     // x will be assigned 7 because null is considered FALSY in JavaScript
console.log(x);      // Output: 7
let y = undefined ?? 8;   // y will be assigned 8 because undefined is also considered FALSY in JavaScript
console.log(y);       // Output: 8

// when multi values are assign
let z = null ?? 7 ?? 9;        // z will be assigned 9 because null is considered FALSY, so the next part of the expression is evaluated which is 7 ?? 9 ... here 7 is not FALSY hence it's assigned directly to z i.e., first value assigned
console.log(z)         // Output: 9





// Terniary Operator
// condition ? exprIfTrue : exprIfFalse
let age = 15;
let message = (age > 18) ? "You are an adult" : "You are not yet an adult";
console.log(message);        // Output: You are not yet an adult