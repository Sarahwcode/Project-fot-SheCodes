function cityChanges(response) {
  let cityData = response.data.city;
  let cityDisplay = document.querySelector("#city-change");
  cityDisplay.innerHTML = cityData;
  let weather = response.data;
  let temperature = Math.round(weather.temperature.current);
  let tempChange = document.querySelector("#temp-change");
  tempChange.innerHTML = `${temperature}°C`;
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
