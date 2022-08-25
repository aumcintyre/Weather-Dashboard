const cityEl = document.querySelector("#search-city");
const nameEl = document.getElementById("location-name")
const currentTime = document.getElementById("today-date")
const searchEl = document.getElementById("searchBtn");
const currentTemp = document.getElementById("temperature");
const currentHumidity = document.getElementById("humidity");
const currentWind = document.getElementById("wind-speed")
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
            currentTemp.innerHTML = "Temperature: " + data.main.temp;
            // currentWind.innerHTML = "Wind Speed: " + data.main.wind.speed + "MPH"; Wind is undefined, but speed doesn't work
            currentHumidity.innerHTML = "Humidity: " + data.main.humidity;

            let lat = data.coord.lat;
            let lon = data.coord.lon;
            let UVRequestURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";


            fetch(UVRequestURL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data);
                    let UVIndex = document.createElement("span")

                    if (response.data[0].value < 4 ) {
                        UVIndex.setAttribute("class", "badge badge-success");
                    }
                    else if (response.data[0].value < 8) {
                        UVIndex.setAttribute("class", "badge badge-warning");
                    }
                    else {
                        UVIndex.setAttribute("class", "badge badge-danger");
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