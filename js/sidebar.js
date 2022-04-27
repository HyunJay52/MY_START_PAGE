const side = document.querySelector("#sideBtn");
const list = document.querySelector("#sidebarList");
const shortCut = document.querySelector("#sidebarList #setShortcut");

function handleShortcut() {
    const sc_div = document.getElementById("#myShortcut");
    
    const sc_toggle = sc_div.classList.contains(HIDDEN_CLASSNAME);
    if(!sc_toggle) {
        shortCut.classList.add(HIDDEN_CLASSNAME);
    }else {
        shortCut.ariaChecked.remove(HIDDEN_CLASSNAME);
    }
}

function handleSidebar() {
    const side_toggle = list.classList.contains(HIDDEN_CLASSNAME);

    console.log(side_toggle)
    if(!side_toggle){
        list.classList.add(HIDDEN_CLASSNAME);   
    }else {
        list.classList.remove(HIDDEN_CLASSNAME);
    }
}

side.addEventListener("click", handleSidebar);
shortCut.addEventListener("click", handleShortcut);