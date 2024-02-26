const apiKey = "f7c6ba02aa2b16b356ea8893ec8dc384";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?&units=metric";

async function checkWeather(){
    const response =await fetch(apiUrl + `@appid=$(apiKey)`);
    let data =await response.json();

    console.log(data);
}
checkWeather();