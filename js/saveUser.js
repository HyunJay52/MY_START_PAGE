/*
    document.getElementById("id") > console.dir(id) = can see objects
    document.getElementsByClassName("") = array
    document.querySelector(".hello h1") > search element by CSS selector
        ; querySelector is only bring the first one(first-child)! cf. querySelectorAll
    use addEventListener to user removeEventListener 
*/

/* const loginForm = document.querySelector("#login-form");
const loginInput =  loginForm.querySelector("input"); 
const loginButton = loginForm.querySelector("button"); */

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const greeting = document.querySelector("#greeting");

// if repeating string, better to make var
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    // remember username ---> local storage = easist one
    localStorage.setItem(USERNAME_KEY, username);
    
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerHTML = `Hello, ${username}`;
    document.title = `${username} place`;
}

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    // show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}else {
    // show greeting 
    paintGreetings(saveUsername);
}