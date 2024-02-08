// cont - cannot be change
const accountid = 1331;

// var - can be change - block scope problem created
var account = "hello.com";

// let - can be change - use to avoid block scope problem in modern js
let accountID = "213313";


console.log("Hello");

// to avoid using console.log every time ,, we use console.table to print data in tabular form using one line
console.table([account, account, accountID]);