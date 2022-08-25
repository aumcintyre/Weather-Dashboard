const cityEl = document.querySelector("#search-city");
const searchEl = document.getElementById("searchBtn");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
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