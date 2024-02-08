// ARRAY --> collection of data of single type

// Decleration & Syntax

const myArray1 = [0,1,2,3,4]
const myArray2 = ["hello", "world", "again"]

const anotherArray = new Array(1,2,3,4)     // this will also create arrray[]

console.log(anotherArray);




// ARRAY METHODS
myArray1.push(5);               // add element at last index
myArray1.pop();                 // remove last element
myArray1.unshift("zero");       // adds element to the beginning
myArray1.shift();               // removes first element

myArray1.includes(6);           // returns boolean value
myArray1.indexOf(2);            // returns index of given value

myArray1.join();                // joins all elements with a string   ,,, type changes to string 
myArray1.slice(1, 3);           // returns part of an array from starting index but do not include ending index(here 3)   ,,, do not change the original array
myArray1.splice(1, 3);          // return part of an array including starting & ending index    ,,, but it deletes these inedxes and values from original array also






// Shallow Copy ---> shares the same reference (heap)
// Deap Copy ---> do not shares the same reference (stack)