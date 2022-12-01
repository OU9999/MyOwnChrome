const KEY_API = "adb83ce6149aee9958c6c93f070ebf23";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${KEY_API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weatherContainer = document.querySelector(
        ".weather span:first-child"
      );
      const cityContainer = document.querySelector(".weather span:last-child");
      const name = data.name;
      const weather = data.weather[0].main;
      const temp = data.main.temp;
      weatherContainer.innerText = `${weather} / ${temp}`;
      cityContainer.innerText = name;
    });
}
function onGeoError() {
  alert("can't find position.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
