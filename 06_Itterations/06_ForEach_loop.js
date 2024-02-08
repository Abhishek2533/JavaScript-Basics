const arr = [1, 2, 3, 4, 5];

arr.forEach(element => {
    console.log(element);   // output -> 1 2 3 4 5
});


// passing another functions reference in foreach loop
function print(items) {
    console.log(items);
}

arr.forEach(print);     // ( note -> pass the reference , do not call the function )


// other parameters
const arr2 = ['hello', 'world', 'js', 'cpp'];
arr2.forEach((element, index, arr) => {
    console.log(element, index, arr);
});

// output ->
// hello 0 ["hello", "world", "js", "cpp"]
// world 1 ["hello", "world", "js", "cpp"]
// js 2 ["hello", "world", "js", "cpp"]
// cpp 3 ["hello", "world", "js", "cpp"]


// Remember -> FOREACH do not return any value