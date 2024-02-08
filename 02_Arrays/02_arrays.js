const marvel = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];

marvel.push(dc);        // OUTPUT --> [ , , , [ , , ]]
// Here araay in array created instead of one array

marvel.concat(dc)       // Use to add two or more arrays        ,,, this will returns a new array of merged arrays





// SPREAD OPERATOR
let arr1 = [1, 2];
let arr2 = [3, 4];
console.log([...arr1, ...arr2]);   // OUTPUT --> [1, 2, 3, 4]




// FLAT method ---> returns a new array concanating all arrays of arrays in one array

// FLAT Method in complex arrays of depth 4
let arr3 = [[[1], [2]], [[3], [4]]];
console.log(arr3.flat());     // OUTPUT --> [1, 2, 3, 4]

/* HACK -> we can use Infinity for depth of unknown / for future changes in depths */

// FLATMAP method to flatten the array and map through it
let arr4 = [[1, 2], [3, 4]];
console.log(arr4.flatMap((item) => item));    //OUTPUT --> [1, 2, 3, 4]





// CONVERSIONS INTO ARRAY
console.log(Array.isArray("HelloWorld"));       // returns boolean
console.log(Array.from("HelloWorld"));          // it converts into array

console.log(Array.from({name: "hello"}));          // empty array --> [] ,,, learn why??
console.log(Array.of(arr1, arr2 /*, and more variables*/));         // creates an array with elements passed as arguments





// METHODS OF THE ARRAYS

// PUSH ------> adds element at the end of the array
// UNSHIFT -----> add element at the beginning of the array
// SHIFT ------->> remove first element from the array
// POP -----------> removes last element from the array
// REMOVE -------->> removes n-th element from the array
// SPLICE -------->> removes any number of elements from the array
// INDEXOF ------->> gives index of the element if present else return -1
// LASTINDEXOF --->> gives index of the last occurrence of the element
// ISEMPTY ------>> checks whether the array is empty or not
// ISFULL -------->> checks whether the array is full or not
// JOIN ----------->> joins all the elements of the array into string using comma (default), space, tab etc..
// SLICE --------->> extracts part of the array
// SUBARRAY ----->> extracts subarray from start to end
// TOLOCALSTRING ->> converts array into localized string
// TOSTRING ---->> converts array into string
// VALUEOFOBJECT -->> gets value of object by name