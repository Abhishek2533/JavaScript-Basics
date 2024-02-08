// Immediately Invoked Functions Expression ( IIFE )

// Following methods runs the functions immediately ... ; is needed to end the function
(
    function hello() {          // named IIFE 
        console.log(`Hello World !!!`);
    }
)();


// anonymus flat arrow function
(
    (name) => {                // unnamed IIFE or IIFE
        console.log(`Hello World ${name} !!!`);
    }
)('of SAM');


// Note -> Just like above when we write two IIFE then remember to write semicolon(;) because this will tells the first function to end and then execute the next function.