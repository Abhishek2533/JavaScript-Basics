const myNums = [1, 2, 3];

// Syntax -> reduce( (accumulator , currentvalue) => (accumulator + currentvalue, initialvalue) )

const myTotal = myNums.reduce( function (acc, currval) {
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval;
}, 0 )

// writing above in arrow function
const totalArrow = myNums.reduce( (acc, currval) => (acc + currval), 0);

console.log(myTotal);

// read MDN for more precise and deep