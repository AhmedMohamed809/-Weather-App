function satup() {
  let long;
  let lat;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const apiKey = "879c06bd326a87da4ffc25cdacf6a1ea";
      let proxy = "https://cors-anywhere.herokuapp.com/";
      const api = `${proxy}https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${apiKey}`;
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
  temp.textContent = `${main.temp}F`;
}
