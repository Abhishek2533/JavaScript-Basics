const map = new Map();
map.set('IN', 'India');     // set is used to map key-value pair -> (key,value)
map.set('USA', 'Unites State of America');
map.set('Fr', 'France');

console.log(map);

// Map objects are collection of key-value pairs
// map remembers order while object will not
// map has unique values ,, no duplicate value is available



// FOR OF loop in MAP
for (const val of map) {
    console.log(val);   // output is in form of array -> [key, value] x 3
}

// printing key and value
for (const [key, value] of map) {
    console.log(key, ':', value);
}



// FOR OF loop in OBJECTS is not itteratable
const myObj = {
    'IN': 'India',
    'USA': 'Unites State of America',
    'Fr': 'France',
}

for (const [key, value] of myObj) {
    console.log(key, ":", value);       // output -> myObj is not itteratable
}

// so we use FOR IN loop