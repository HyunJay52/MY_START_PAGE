const side = document.querySelector("#sideBtn");
const list = document.querySelector("#sidebarList");
const shortCut = list.querySelector("li:last-child");

function handleShortcut() {
    const sc_div = shortCut.querySelector("#myShortcut");
    const sc_toggle = sc_div.classList.contains(HIDDEN_CLASSNAME);
    
    if(!sc_toggle) {
        sc_div.classList.add(HIDDEN_CLASSNAME);
    }else {
        sc_div.classList.remove(HIDDEN_CLASSNAME);
    }
}

function handleSidebar() {
    const side_toggle = list.classList.contains(HIDDEN_CLASSNAME);

    if(!side_toggle){
        list.classList.add(HIDDEN_CLASSNAME);   
    }else {
        list.classList.remove(HIDDEN_CLASSNAME);
    }
}

side.addEventListener("click", handleSidebar);
shortCut.addEventListener("click", handleShortcut);