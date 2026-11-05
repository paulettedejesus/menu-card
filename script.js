console.log("Hello from script.js")
// get HTML elements
let form = document.querySelector("#menu-form");
let input = document.querySelector("#menu-input");
let count = document.querySelector("#count");
let menuText = document.querySelector("#menu-text");

// Declaring the handle submit function
function handleSubmit(event) {
    //Prevents the page reload after clicking the submit 
    event.preventDefault();
    // JSON.parse()converts JSON to an object - input.value
    let menu = JSON.parse(input.value);
    count.textContent = "We have " + menu.length +" items today."
    menuText.textContent = "";
    for (let i = 0; i < menu.length; i++) {
        menuText.textContent = 
            menuText.textContent + menu[i].name + " — $" + menu[1].price + "\n";
    }
}

// Attach an event listener to the form that list 
form.addEventListener("submit", handleSubmit);