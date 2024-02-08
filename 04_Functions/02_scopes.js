let a = 10;
const b = 20;
var c = 30;

// console.log(a);
// console.log(b);
// console.log(c);


// Scope ---> { }

if (true) {
    let d = 10;
    const e = 20;
    var f = 30;
}

// console.log(d);     //  d is not defined
// console.log(e);     // e is not defined
console.log(f);     // 30   ... var produce this type of problem ... it will globally available in code

// to avoid this we avoid using var


// GLOBAL SCOPE
let val1 = 20;

// BLOCK SCOPE
if (true) {
    let val2 = 30;
    console.log("value of block scope: ", val2);
}

console.log("value of global scope: ", val1);

// window scope and node scope are different


// Example using nested function
function one() {
    const user = "sam";

    function two() {
        const website = "youtube";
        console.log(user);
    }
    // console.log(website);       // Error -> undefined

    two();      // sam

}

one();





/* -------------- important concept -------------- */


// calling function before declaration

console.log(addOne(5));     // 6

function addOne(num) {
    return num + 1;
}



// callling functoin before declaration ( arrow function )

console.log(addTwo(5));     // cannot access before initialization      ---> hoisting

const addTwo = function(num) {
    return num + 2;
}