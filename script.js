function cityChanges(response) {
  let cityData = response.data.city;
  let cityDisplay = document.querySelector("#city-change");
  cityDisplay.innerHTML = cityData;
  let weather = response.data;
  let temperature = Math.round(weather.temperature.current);
  let tempChange = document.querySelector("#temp-change");
  tempChange.innerHTML = `${temperature}°C`;
  let displayCondition = document.querySelector("#condition");
  displayCondition.innerHTML = `Condition: <span style="color: #f76b8a;"> ${response.data.condition.description}</span>`;
  let displayHumidity = document.querySelector("#humidity");
  displayHumidity.innerHTML = `Humidity: <span style="color: #f76b8a;"> ${response.data.temperature.humidity}%</span>`;
  let displayWind = document.querySelector("#wind");
  displayWind.innerHTML = `Wind Speed: <span style="color: #f76b8a;">${response.data.wind.speed}km/h</span>`;
  let timeChange = document.querySelector("#time-date");
  let date = new Date(response.data.time * 1000);
  timeChange.innerHTML = timeDate(date);
  let iconElement = document.querySelector("#icon");
  iconElement.innerHTML = `<img

            src="${response.data.condition.icon_url}" class="icon-temp"/>`;
}
function timeDate(date) {
  let hour = date.getHours();
  let minute = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minute < 10) minute = `0${minute}`;
  return `${day} ${hour}:${minute}`;
}

function getCity(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#city-input").value;
  let apiKey = "145ba0dc50b14bt75oafffd6a19b4a36";
  let url = `https://api.shecodes.io/weather/v1/current?query=${inputCity}&key=${apiKey}&units=metric`;
  axios.get(url).then(cityChanges);
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", getCity);
