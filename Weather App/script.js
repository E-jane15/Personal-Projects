
const apiKey = "f7c6ba02aa2b16b356ea8893ec8dc384";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.querySelector('.city');
const temp = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind');
const searchBar = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');


async function checkWeather(town){
    const response = await fetch(apiUrl  + town + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
  city.innerHTML = data.name;
  temp.innerHTML=data.main.temp + "°c";
  humidity.innerHTML=data.main.humidity + "%";
  wind.innerHTML=data.wind.speed + "km/h";


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})
