const localWeather = document.querySelector(".local-weather");

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY.key}&units=metric`;
    
    fetch(url).then(response => response.json().then(data => {
        // console.log(data.name, data.weather[0].main);
        const name = data.name;
        const weather = data.weather[0].main;

        localWeather.innerText = `${weather}, @${name}`;
    }));


}
function onGeoError() {
    alert("cannot find you, sorry");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
