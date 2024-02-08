// IF   ---> runs only when condition is true
// Syntax
if (condition) {
    console.log("execute");
}

// Example
const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to continue");
}



// IF ELSE
// ELSE  --> runs if the condition is false ,,, if condition is not true or false, then else will execute
// Syntax
if (condition) {
    console.log("if Executed");
} else {
    console.log("else Executed");
}



// NESTED IF ELSE
// Syntax
if (condition1) {
    console.log("executed for condition 1");
} else if (condition2) {
    console.log("executed for condition 2");
} else if (condition3) {
    console.log("executed for condition 3");
} else {
    console.log("else Executed");
}