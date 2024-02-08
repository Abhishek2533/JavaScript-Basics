// DOM SELECTORS

const body = document.body;
const head = document.head;
const html = document.documentElement;
const title = document.title;

// Accessing an element by its ID:
const para1 = document.getElementById("para1");

// Accessing elements by their class name:
const divs = document.getElementsByClassName("divs");


// More Selectors:

/*
- querySelector(): Selects the first element that matches a specified CSS selector from the document.
- querySelectorAll(): Returns all elements in the document that match a specified CSS selectors.
- getElementsByTagName(): Gets all elements with the specified tag name, regardless of namespace prefixes.
- getElementsByName(): Gets a list of all elements with the specified name attribute.
- getElementsByClassName(): Gets a list of all elements with the specified class name.
- hasAttribute(): Determines whether an element has an attribute with a specified name.
- addEventListener(): Attaches an event handler to the specified element. An options object or inline event listener can be passed. An optional object can be passed to specify characteristics of the event listener.
- getAttribute() : Gets all HTML elements of specified name.
- setAttribute(): Adds or changes the value of an attribute on an HTML element.
- removeAttribute(): Removes an attribute from an HTML element.
*/




/* ------------------------------ Some Random Examples ------------------------------ */



// Adding content to the HTML Document
function addContent() {
    const newDiv = document.createElement("div");
    newDiv.setAttribute("id", "newDiv");
    newDiv.innerHTML = "<strong>Hello World!</strong>";
    body.appendChild(newDiv);
    let newPara = document.createElement("p");
    newPara.textContent = "This is a new paragraph.";
    body.insertBefore(newPara, para1);
    body.replaceChild(newPara, para2);
}
addContent();

// Manipulating CSS styles using JavaScript
function changeStyle() {
    para1.style.color = "blue";
    para1.style.fontSize = "48px";
    divs[0].style.backgroundColor = "#ffebcd";
    divs[1].className += " darker";
    if (!divs[1].classList.contains("darker")) {
        divs[1].classList.add("darker");
    } else {
        divs[1].classList.remove("darker");
    }
}
changeStyle();

// Working with Images
function workWithImages() {
    const myImage = document.createElement("img");
    myImage.src = "smile.gif";
    body.appendChild(myImage);
    myImage.addEventListener("load", function () {
        console.log("The image has finished loading.");
    });
    myImage.width = 50;
    console.log(myImage.width);
    // The alt attribute holds alternative information for an image if it cannot be displayed
    myImage.alt = "A smiling face";
    console.log(myImage.alt);
}
workWithImages();

// Handling User Input
function handleUserInput() {
    const userName = prompt("Please enter your name:");
    alert(`Welcome ${userName}!`);
}
handleUserInput();

// Creating and manipulating forms
function createForm() {
    const form = document.createElement("form");
    body.appendChild(form);
    const inputField = document.createElement("input");
    inputField.type = "text";
    inputField.name = "username";
    inputField.placeholder = "Enter your username here";
    form.appendChild(inputField);
    const submitButton = document.createElement("input");
    submitButton.type = "submit";
    submitButton.value = "Submit";
    form.appendChild(submitButton);
    form.onsubmit = function (e) {
        e.preventDefault();
        const userInput = inputField.value;
        alert(`You entered "${userInput}"`);
    };
}
createForm();

// Manipulating the Document Object Model (DOM)
const para = document.querySelector("p");
console.log(para.innerText);
para.innerText = "This is a paragraph.";
console.log(para.innerHTML);
para.style.color = "blue";
console.log(para.className);
para.classList.add("highlighted");
if (!para.classList.contains("highlighted")) {
    para.classList.add("highlighted");
}
para.id = "demoParagraph";
console.log(document.getElementById("demoParagraph").outerHTML);