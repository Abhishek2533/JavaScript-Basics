// generate a random color - hex
const randomColor = function() {
    const hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}


// toggle reference
let change;


// creating functions
const changeColor = function() {
    document.body.style.backgroundColor = randomColor();
};


const startChangingColor = function() {
    // checking conditions for values
    if (!change) {
        change = setInterval(changeColor, 1000);
    }
};


const stopChangingColor = () => {
    clearInterval(change);
    change = null;      // dereference the value (industrial work need to free memory)
};



// reference of events
document.querySelector("#start").addEventListener("click", startChangingColor);
document.querySelector("#stop").addEventListener("click", stopChangingColor);