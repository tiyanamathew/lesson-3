let output = document.querySelector(`#current-time`);

let today = new Date();

let date = today.getDate();
let hours = addZero(today.getHours());
let minutes = addZero(today.getMinutes());

let current_time = `Today is the ${date}, at
         ${hours}:${minutes}.`;
output.innerHTML = current_time;

function addZero(num) {
  return num < 10 ? `0${num}` : num;
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  searchCity(cityInput.value);
}
function searchCity(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let units = "metric";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(showTemperature);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
function showTemperature(response) {
  let cityElement = document.querySelector("#city");
  let temperatureElement = document.querySelector("#current-temperature");
  let temperature = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  temperatureElement.innerHTML = temperature;
}

searchCity("New York");
