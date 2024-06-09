const url =
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "870a830042mshfd45b635b9ca862p138fc2jsn7efe46dc26a1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};



let getWeather = function(city){
    fetch(
      `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        document.getElementById("cloud_pct").textContent = response.cloud_pct;
        document.getElementById("temp").textContent = response.temp;
        document.getElementById("temp2").textContent = response.temp;
        //document.getElementById("feels_like").textContent = response.feels_like;
        document.getElementById("humidity").textContent = response.humidity;
        document.getElementById("humidity2").textContent = response.humidity;
        document.getElementById("min_temp").textContent = response.min_temp;
        document.getElementById("max_temp").textContent = response.max_temp;
        document.getElementById("wind_speed").textContent = response.wind_speed;
        document.getElementById("wind_speed2").textContent = response.wind_speed;
        document.getElementById("wind_degrees").textContent =
          response.wind_degrees;
        document.getElementById("sunrise").textContent = response.sunrise;
        document.getElementById("sunset").textContent = response.sunset;
      })
      .catch((err) => console.error(err));

      //document.getElementById("temperature-card").innerHTML = response.temp;

}

document.querySelector('#submit').addEventListener('click', (e)=>{
    e.preventDefault()
    let city_name = document.getElementById('city').value
    getWeather(city_name)
    document.getElementById('title-city').innerHTML = city_name

})

getWeather('delhi')