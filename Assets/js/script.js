const cityEl = document.querySelector("#search-city");
const nameEl = document.getElementById("location-name")
const searchEl = document.getElementById("searchBtn");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWind = document.getElementById("wind-speed")
const APIKey = "6d2634cf057189dfbdc49782f75750f9"


function currentWeather(search) {
    let requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + search + "&appid=" + APIKey;
    console.log(requestURL);
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // let weatherData = data
            console.log(data);
            nameEl.innerHTML = data.name;
            currentTemp.innerHTML = "Temperature: " + data.main.temp;
            // currentWind.innerHTML = "Wind Speed: " + data.main.wind.speed + "MPH"; Wind is undefined, but speed doesn't work
            currentHumidity.innerHTML = "Humidity: " + data.main.humidity;
        });

}

// let something = data;
// console.log(something.main.humidity);
// }
// currentTemp.innerHTML=(dat.main.temp)
//Need to build a function to use the data



function formControl(event) {
    event.preventDefault();
    let search = cityEl.value.trim();
    currentWeather(search);
}

searchEl.addEventListener("click", formControl)