const del = document.querySelector("#empty-all");

function removeInfo() {
    localStorage.removeItem(USERNAME_KEY);
    localStorage.removeItem(TODOS_KEY);
    localStorage.removeItem(IMG_KEY);
    
    alert("clear all the information, thank you!");
}

del.addEventListener("click", removeInfo);