function satup() {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const apiKey = "879c06bd326a87da4ffc25cdacf6a1ea";
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
      fetch(api)
        .then((resp) => resp.json())
        .then((data) => getWeatherData(data));
    });
  }
}
window.onload = satup;
function getWeatherData(data) {
  console.log(data);
  const { name, weather, main } = data;
  const nameLocation = document.querySelector(".loction-timeZone");
  //    const wetherOfTheLocation = document.querySelector(".weather);
  const wetherOfTheLocation = document.querySelector(".weather");
  const temp = document.querySelector("#temp");
  nameLocation.textContent = name;
  wetherOfTheLocation.innerText = weather[0].description;

  temp.textContent = `${Math.round(main.temp - 273)}°C`;
  temp.addEventListener("click", () => {
    let degree = Math.round(main.temp);
    //let degree = ((main.temp) - 32) / 1.8;
    temp.textContent = `${degree}°F`;
  });
}
