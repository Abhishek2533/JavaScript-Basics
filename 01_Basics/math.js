// MATH is an Object in js ... it is inside js


console.log(Math);
console.log(Math.abs(-5)); // convert values to +ve only
console.log(Math.round(4.6)); // roundoff values in default
console.log(Math.ceil(4.2)); // roundoff to upper value
console.log(Math.floor(4.2)); // roundoff to lower value
console.log(Math.min(4, 3, 6, 8, 1, 2)); // give min value
console.log(Math.max(4, 3, 6, 8, 1, 2)); // give max value


// random in maths mostly used ---> range 0 - 1

console.log(Math.random()); // o/p -> 0 to 1
console.log(Math.random() * 10); // o/p -> 0 to 10
console.log((Math.random() * 10) + 1); // o/p -> 1 to 11

// General range - to define range with given min & max
const min = 10;
const max = 20;

console.log((Math.random() * (max - min + 1)) + min);




// to know more METHODS of string use browser console and read documents