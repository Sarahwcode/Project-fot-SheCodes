function cityChanges(event) {
  event.preventDefault();
  let inputCity = document.querySelector("#input-city");
  let citySubmit = document.querySelector("#city-Change");
  inputCity.innerHTML = citySubmit.value;
}

let citySearch = document.querySelector("#city-search");
citySearch.addEventListener("submit", cityChanges);
