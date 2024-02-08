// FOR IN loop
const myObj = {
    'IN': 'India',
    'USA': 'Unites State of America',
    'Fr': 'France',
}

// key uisng forin loop
for (const key in myObj) {
    console.log(key);       // output is of all keys -> IN USA Fr
}

// values using forin loop
for (const key in myObj) {
    console.log(myObj[key]);       // output is of all keys -> India , Unites State of America, France
}




// FOR IN loop in ARRAYS
const arr = [1, 2, 3, 4, 5];
for (const key in arr) {
    console.log(key);   //  0 1 2 3 4
}



// FOR IN by default provides keys while FOR OF loop will gives values



// FOR IN loop in MAP is also not itteratable