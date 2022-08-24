function initWeather() {
    // personal API key
    let APIKey = "6d2634cf057189dfbdc49782f75750f9"

    // gloabal variables to push data to
    let searchEl = document.getElementById("searchBtn");
    let cityEl = $('#search-city').val();
    // let nameEl = $('')
    // let weatherPic = $('')

    function currentWeather(cityName) {
        let requestURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + APIKey;

        fetch(requestURL)
        .then((response) => response.json())
        // .then((data) => console.log(data));

    searchEl.addEventListener("click", console.log(data));
}
}
initWeather();