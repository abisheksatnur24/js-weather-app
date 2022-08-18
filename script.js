const weather = {
    apiKey : "1e9e10feb8d2c87f91886f22933a932f",
    fetchWeather: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then( (response) => response.json())
        .then( (data) => {
            console.log(data)
            const { temp, humidity } = data.main;
            const { description, icon } = data.weather[0];
            const { speed } = data.wind;
            console.log(temp)
            this.displayWeather(city, temp, humidity, description, icon, speed)
        }
        )
    },
    displayWeather: function(city, tempVal, humidityVal, descriptionVal, iconVal, speedVal){
        document.querySelector(".city").innerText = "Weather in " + city;
        document.querySelector(".temperature").innerText = tempVal + " °C";
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + iconVal + "@2x.png";
    }
}