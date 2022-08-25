const cityEl = document.querySelector("#search-city");
const nameEl = document.getElementById("location-name")
const currentTime = document.getElementById("today-date")
const searchEl = document.getElementById("searchBtn");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWind = document.getElementById("wind-speed")
const currentUV = document.getElementById("UV-index")
const APIKey = "6d2634cf057189dfbdc49782f75750f9"
const now = dayjs().toString()

console.log(now);

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
            currentTime.innerHTML = now;
            currentTemp.innerHTML = "Temperature: " + Math.round(((data.main.temp - 273.15) * 1.8) + 32);
            // currentWind.innerHTML = "Wind Speed: " + data.main.wind.speed + "MPH"; Wind is undefined, but speed doesn't work
            currentHumidity.innerHTML = "Humidity: " + data.main.humidity;

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let UVRequestURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";

// Nested function to find UV Index and change background color based on that value
            fetch(UVRequestURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    let UVIndex = document.createElement("span")

                    if (data[0].value < 4 ) {
                        UVIndex.setAttribute("class", "badge badge-success");
                    }
                    else if (data[0].value < 8) {
                        UVIndex.setAttribute("class", "badge badge-warning");
                    }
                    else {
                        UVIndex.setAttribute("class", "badge badge-danger");
                    }
                    UVIndex.innerHTML= (data[0].value);
                    currentUV.innerHTML = "UV Index: ";
                    currentUV.appendChild(UVIndex);
                })
// Nested function to pull 5 day data
                let cityID = data.id;
                let forecastRequestURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
                fetch(forecastRequestURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    const forecastEl = document.querySelectorAll("#fiveday")
                    for (i=0; i < forecastEl.length; i++){
                        forecastEl[i].innerHTML="";
                        let forecastIndex = i * 8 + 4;
                        let forecastTemp = document.createElement("p");
                        forecastTemp.innerHTML = "Temperature: " + data.list[forecastIndex].main.temp;
                        forecastEl[i].appendChild(forecastTemp);
                        let forecastHumidity = document.createElement
                    }
                })
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