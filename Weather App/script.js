
const apiKey = "f7c6ba02aa2b16b356ea8893ec8dc384";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const city = document.querySelector('.city');
const temp = document.querySelector('.temperature');
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind');
const searchBar = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('#weather');

async function checkWeather(town){
    const response = await fetch(apiUrl  + town + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    
  city.innerHTML = data.name;
  temp.innerHTML=data.main.temp + "°c";
  humidity.innerHTML=data.main.humidity + "%";
  wind.innerHTML=data.wind.speed + "km/h";
  

  if(data.weather[0].main == 'Clouds'){
     weatherIcon.src='images/clouds.png';
  } else if(data.weather[0].main == 'Clear'){
    weatherIcon.src='images/clear.png';
  } else if(data.weather[0].main == 'Drizzle'){
    weatherIcon.src='images/drizzle.png';
  } else if(data.weather[0].main == 'Mist'){
    weatherIcon.src='images/mist.png';
  }else if(data.weather[0].main == 'Rain'){
    weatherIcon.src='images/rain.png';
  } else if(data.weather[0].main == 'Snow'){
    weatherIcon.src='images/snow.png';
  } 

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBar.value);
})
