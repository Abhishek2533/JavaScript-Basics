// DESTRUCTURING IN OBJECTS


// Destructuring is a way to extract values from arrays or objects.
const person = { name: 'John', age: 30, city: 'New York' };

// Extracting the value of "name" property from object "person".
let { name } = person;
console.log(name); // Outputs: John

// You can also use default values for properties that might not exist in an object.
let { country = 'USA' } = person;
console.log(country); // Outputs: New York


// Another Example
const course = {
    coursename: "webD",
    price: "2000",
    courseInstructure: "SAM"
}

// Destructuring SYNTAX ---> datatype { "value to be extract" } = "object from which value will be taken"
const { price } = course;
console.log(price);

// Destructuring SYNTAX ---> datatype { "value to be extract": "name with you want to access this value" } = "object from which value will be taken"
const { courseInstructure: Instructure } = course;
console.log(Instructure);


// JSON

// SYNTAX ---> { "key" : "value" }

// {
//     "coursename": "webD",
//     "price": "2000",
//     "courseInstructure": "SAM"
// }1