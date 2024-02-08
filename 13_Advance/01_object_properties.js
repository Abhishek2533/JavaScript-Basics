// create an Object
const sam = {
    name: "hello",
    price: "230",
    isAvailable: true,
    order: function () {
        console.log('hello world');
    }
}

// getOwnPropertyDescriptor -> use to get default properties in js
console.log(Object.getOwnPropertyDescriptor(sam, "name"));

// defineProperty ->  change default property in js
Object.defineProperty(sam, "name", {
    writable: false,
    enumerable: false   // itteratable is disabled now
})

// after property change -
console.log(Object.getOwnPropertyDescriptor(sam, "name"))


// itteration in object

// for (const [key, value] of sam) {       // sam is not itteratable
//     console.log(`${key}: ${value}`);
// }

// so we use Object.entries to itterate
for (const [key, value] of Object.entries(sam)) {
    // we want key value - so we avoid console of function
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}