// Number -> CONVERSION to number


let string = "22";
let num = Number(str);

let val = "22sdv";
let numVal = Number(val); // this will convert it in number but can never print the value as it is not pure number (NaN)
console.log(numVal); // output -> NaN - not a number = (22dv)

let srt = "pi";
let number = Number(str); // this cannot be convert in number as it is purely string
console.log(number); // output -> NaN

let value1 = null;
let values1 = Number(value1);
console.log(values1); // output -> 0

let value2 = undefined;
let values2 = Number(value2);
console.log(values2); // output -> NaN

let bool1 = true;
let bool2 = false;

console.log(bool1); // output -> 1
console.log(bool2); // output -> 0



// *****************************************************************************************************************



// Boolean -> CONVERSION to boolean


let boolnum = 1;
let boolval = Boolean(boolnum);
console.log(boolval); // output -> true

// empty string convert into false & string with value convert into true
let strBool = "";
let strValue = Boolean(strBool);
console.log(strValue); // output -> false

let strNum = "Hello World!";
let strNumValue = Boolean(strNum);
console.log(strNumValue); // output -> true



// *****************************************************************************************************************



// String -> CONVERSION to string


let aNumber = 33;
let numToString = String(aNumber);
console.log(numToString); // output -> '33'



// *****************************************************************************************************************



// Symbol -> always makes UNIQUE although they are of same data type


let id1 = Symbol('123');
let id2 = Symbol('123');
console.log(id1 == id2); // output -> false



// *****************************************************************************************************************



// BigInt -> use n in last


let numbers = 325312513531513n;
console.log(typeof numbers); // output -> bigint



// More conversions learn by practice yourself