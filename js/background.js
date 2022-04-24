const imgs = [
    "img1.jpg", "img2.jpg", "img3.jpg"
];

const side = document.querySelector("#sideBtn");
const imgBlock = document.querySelector("#myImg");

let imgList = [];
const IMG_KEY = "myimgs";

function addNewImg(url) {
    localStorage.setItem(IMG_KEY, JSON.stringify(imgList));
}

function addImgUrl(event) {
    if (event.keyCode === 13) {
        const url = imgBlock.querySelector("input");

        imgList.push(url.value);

        addNewImg(url.value);
        url.value = "";
    }

}

function paintBackground(todayBG) {
    const bgImg = document.createElement("img");
    bgImg.src = `${todayBG}`;
    document.body.appendChild(bgImg);
}

function handleToggle() {
    const toggle_check = imgBlock.classList.contains(HIDDEN_CLASSNAME);
    if (!toggle_check) {
        imgBlock.classList.add(HIDDEN_CLASSNAME);
    } else {
        imgBlock.classList.remove(HIDDEN_CLASSNAME);
    }
}
side.addEventListener("click", handleToggle);
imgBlock.addEventListener("keyup", addImgUrl);

const savedImg = localStorage.getItem(IMG_KEY);

if(savedImg !== null) {
    const parsedUrl = JSON.parse(savedImg);
    imgList = parsedUrl
    
    //src
    const todayPick = imgList[Math.floor(Math.random() * imgList.length)];
    paintBackground(todayPick);

}else {
    const todayImg = "img/" + imgs[Math.floor(Math.random() * imgs.length)];
    paintBackground(todayImg);
}
