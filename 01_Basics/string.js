// simple way to define
const str = "this is a string";

// get more features/properties/methods
const name = new String('this is a string');    // by defining in this way we get more properties which help lots


// METHODS in this string
console.log(name.length);
console.log(name.substring(0,10)); // (start, end-1) .... cannnot use -ve values,,, although after given it will start with 0 eventually
console.log(name.slice(-8,5)); // can use -ve values

console.log(name.trim()); // remove extra spaces



// browser converts space into %20 in url to remove space so:
const actualUrl = "https://hello.com/world for you";
const browserConvertedUrl = "https://hello.com/world%20for%20you"; // this will obtain after browser
console.log(browserConvertedUrl.replace('%20', '-'));

console.log(name.includes()); // to check value is present or not
console.log(name.split()); // split according to given values and return of them ARRAY




// to know more METHODS of string use browser console and read documents