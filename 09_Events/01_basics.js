// ADDEVENTLISTNER

// syntax-
element.addeventlistener(event, function () { });


// All; Events:
// - load
// - unload
// - abort
// - error
// - click (mouse)
// - contextmenu (right-click)
// - dblclick (double-click)
// - mousedown / touchstart
// - mouseup   / touchend
// - keydown
// - keypress
// - textInput
// - Zoom


// example - 1
var btn = document.querySelector('button');
btn.addEventListener('click', function () {
    console.log("Button Clicked");
})

// example -2
function showAlert() {
    alert("Hello There!");
}
document.body.addEventListener('mousemove', showAlert);

// REMOVEEVENTLISTENER

// To remove an event listener from a specific element we use the following syntax:
element.removeEventListener(event, functionName);


// Example
btn.removeEventListener('click', showAlert);    // If you don't provide the second argument, all listeners for that event type will be removed.0






// EVENT OBJECTS
// type, timestamp, preventDefault, target, toElement, srcElement, currentTarget, clientX, clientY, screenX, screenY, altKey, ctrlKey, shiftKey, KeyCode

document.getElementById('btn').addEventListener('click', function (e) {
    console.log(e);     // this e contains aal events ... check console
});


// EVENT PROPAGATION
element.addeventlistener(event, function () { }, false);    // by default this is false so we don't write this when it is not in use

// - FALSE -> (also called bubbling) BOTTOM to TOP
// - TRUE -> TOP to BOTTOM

// to sop bubbling use -> e.stopPropagation() 



// Learn by Practice

// OLD USED VERSIONS -
// attachEvent() - Internet Explorer
// onEventListner() - jQuery