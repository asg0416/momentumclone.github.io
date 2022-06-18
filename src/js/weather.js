const API_KEY = "8bab5afa1c8be369722bbca48120e0bc";

const onGeoOK = (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const citySpan = document.querySelector("#weather span:last-child");
      const weatherSpan = document.querySelector("#weather span:first-child");
      weatherSpan.innerText = `${data.weather[0].main} / ${data.main.temp} ℃`;
      citySpan.innerText = data.name;
    });
};

const onGeoError = () => {
  alert("Can't find you. No weather for you");
};

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
