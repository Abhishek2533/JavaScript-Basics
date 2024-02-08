// SINGLETON OBJECT
// A singleton object is an object which has only one instance during the entire life of an application.
const object1 = new Object();

// NON SINGLETON OBJECT
const object2 = {};

// NESTED IN OBJECT 
const regularUser = {
    name: "John Doe",
    age: 30,
    account: {
        type: "Regular User Account",
        balance: 500
    }
}

// MERGE OBJECTS
const obj1 = {
    x: 1,
    y: 2
}
const obj2 = {
    z: 1,
    a: 2
}

// merge using spread operator
const mergedObject = { ...obj1, ...obj2 };


// MORE WAYS TO MERGE OBJECTS
/*
- Using the concat() method to merge objects. This will create a new object with all properties from both objects.
- Using the concat() method to merge objects into an array and then converting that array back to an object using the Object.assign({}, obj1, obj2).
- Using the `Object.assign()` method
- By using the spread operator (`...`)
*/
console.log(mergedObject);






// PROPERTIES OF OBJECT



// The properties of an object are accessed through dot notation or bracket notation.
console.log("Name: ", regularUser.name);
console.log("Account Type: ", regularUser.account.type);

// ADD NEW PROPERTY
regularUser.email = 'john@gmail.com';
console.log('New Email: ', regularUser.email)

// DELETE PROPERTY
delete regularUser.age;
console.log('Age Deleted: ', regularUser.age);

// ARRAYS AS PROPERTIES
regularUser.hobbies = ['Reading', 'Writing'];
console.log('Hobbies: ', regularUser.hobbies);

// GET ALL PROPERTIES OF AN OBJECT USING A LOOP
for (let key in regularUser) {
    console.log(`${key}: ${regularUser[key]}`);
}

// CHECK IF A PROPERTY EXISTS ON AN OBJECT
if ('email' in regularUser) {
    console.log('Email exists');
} else {
    console.log('Email does not exist')
};

// CLONING AN OBJECT
const clonedObj = { ...regularUser };
clonedObj.password = 'secret';
console.log('Original User: ', regularUser);
console.log('Cloned User: ', clonedObj);

// HOW TO COMPARE TWO OBJECTS?
/*
- Use `==` to compare if two objects have the same value, even if they have different property names or order of properties. However, it will return false if one is null and the other isn't.
- To check if two objects have exactly the same properties and values use `JSON.stringify()` method on both objects and then compare them using `===`. This method works with nested objects as well.
- Use the === operator to compare objects if they refer to the same memory location.
- If yes, then it is a shallow comparison and returns true only if both objects have the exact same properties with the exact same values. If they do, it will return true. Otherwise, it returns false.
- If obj1 and obj2 both point to the exact same memory location, then obj1 === obj2 will return true.
- However, this method is generally not recommended for comparing objects because it only checks if two variables reference the same memory location.
*/