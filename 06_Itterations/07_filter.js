const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Filter returns value
// myNums.filter( (num)=> 
// condition to return value 
// )


let val = myNums.filter((num) =>
    num > 4     // condition that greater than 4 values should be return
)
console.log(val); // output -> [5, 6, 7, 8, 9, 10]



// what if use flat arrow function:
let value = myNums.filter((num) => {
    num > 4
})
console.log(value); // output -> []



// this will returns empty array because it is inside the scope ... so we use return keyword -
let newValue = myNums.filter((num) => {
    return num > 4
})
console.log(newValue); // output -> [5, 6, 7, 8, 9, 10]


// example of filter using array of 10 objects with 5 enteries
const arrOfObjects = [
    { name: "John", age: 30, birth: 1995 },
    { name: "Emily", age: 25, birth: 1999 },
    { name: "David", age: 35, birth: 2001 },
    { name: "Jane", age: 40, birth: 2001 }
]
let result = arrOfObjects.filter(person => person.age >= 30)
console.log(result)
/* Output:
[
    { name: 'John', age: 30, birth: 1995 },
    { name: 'David', age: 35, birth: 2001 },
    { name: 'Jane', age: 40, birth: 2001 }
] */