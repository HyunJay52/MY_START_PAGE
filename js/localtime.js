const localTime = document.querySelector(".local-time");

function handleLocalTime() {
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, "0");
    const minute = String(now.getMinutes()).padStart(2,"0");
    const second = String(now.getSeconds()).padStart(2,"0");

    localTime.innerText = `${hour} : ${minute} : ${second}`
}

handleLocalTime();
setInterval(handleLocalTime, 1000);
