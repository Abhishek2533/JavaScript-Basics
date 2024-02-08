let str1 = "sam";
let str2 = "pi";

let str3 = str1 + str2;  // substraction is not allowed in string by this format
console.log(str3); // output -> sam pi


// default conversion is in string by some preference (read documents) so : 
console.log("1" + 2); // output -> 12
console.log(1 + "2"); // output -> 12
console.log("1" + 2 + 2); // output -> 122
console.log(1 + 2 + "2"); // output -> 32

// but all these are not preferable

console.log(+true); // output -> 1
console.log(+""); // output -> 0

// console.log(true+); // output -> error


// comparison operations

/*  
    note ---> euqlity check (==) and compoarsion operators (>   <   >=  <=) works differently
*/

console.log("2" > 1); // output -> true 
console.log("02" > 1); // output -> true 


// comparison operators converts null to a number, treating as 0 so :
console.log(null > 0); // output -> false 
console.log(null == 0); // output -> false 
console.log(null >= 0); // output -> true 

console.log(undefined > 0); // output -> false
console.log(undefined == 0); // output -> false 
console.log(undefined < 0); // output -> false

// try to avoid or check carefully the above comparisons

// strict check ( === ) -> check value && data type
console.log(4 === '4'); // output -> false


// prefix & postfix OPERAIONS ---> docs