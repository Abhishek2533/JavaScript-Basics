// SWITCH
// Syntax
switch (key) {      // key -> checking for
    case value:     // value -> matching value which is needed to execute the code ... it can be multiple
        console.log("executed");
        break;      // break is used to stop the following line to execute except default

    default:        // if noe value match then default will executed
        console.log("default Executed");
        break;
}

// Example
const month = 3;

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Febrary");
        break;
    case "feb":     // we can also use string to match the value
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;

    default:
        console.log("default case match");
        break;
}