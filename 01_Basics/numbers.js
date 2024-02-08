// simple way to define
const number = 100;

// get more features/properties/methods
const name = new Number(100);    // by defining in this way we get more properties which help lots


// METHODS in this number
console.log(number.toString());
console.log(number.toString().length());
console.log(number.toFixed(2)); // this gives decimal values to number upto 2(any value that we define/give in function)

// precision use to precise the velue and it return string
const num = 123.8789;
console.log(num.toPrecision(3)); // input range -> 1 - 21

const zeroes = 100000000;
console.log(zeroes.toLocaleString()); // convert into commas ..... by default US
console.log(zeroes.toLocaleString('en-US'));   // for formatting numbers with commas as thousands separators
console.log(zeroes.toLocaleString('en-in'));   // for formatting numbers with commas as thousands separators



// to know more METHODS of string use browser console and read documents