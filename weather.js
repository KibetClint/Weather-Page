let cityName = document.querySelector("#cityName");

let defaultCity = "Nairobi"

function fetchWeather(city){
    city = cityName.value;

    axios.get(`http://api.weatherapi.com/v1/current.json?key=f9b1154704ac4956a51112000240204&q=${!city ? defaultCity : city}&aqi=no`).then((response)=>{
        console.log(response.data)
        document.getElementById('day').innerText= formatDay(new Date());
        document.getElementById('condition').innerText = response.data.current.condition.text;
        document.getElementById('icon').src = response.data.current.condition.icon;
        document.getElementById('temp').innerHTML = `${response.data.current.temp_c}<sup>0</sup>C`;
    })

    axios.get(`http://api.weatherapi.com/v1/history.json?key=f9b1154704ac4956a51112000240204&q=${!city ? defaultCity : city}&dt=2024-04-02`).then((response)=>{
        // console.log(response.data.forecast.forecastday[0])
        document.getElementById('day2').innerText = formatDay(response.data.forecast.forecastday[0].date)
        document.getElementById('condition2').innerText = (response.data.forecast.forecastday[0].day.condition.text);
        document.getElementById('icon2').src = (response.data.forecast.forecastday[0].day.condition.icon);
        document.getElementById('temp2').innerHTML = `${response.data.forecast.forecastday[0].day.avgtemp_c}<sup>0</sup>C`;
    })

    axios.get(`http://api.weatherapi.com/v1/history.json?key=f9b1154704ac4956a51112000240204&q=${!city ? defaultCity : city}&dt=2024-04-01`).then((response)=>{
        // console.log(response.data.forecast.forecastday[0])
        document.getElementById('day3').innerText = formatDay(response.data.forecast.forecastday[0].date)
        document.getElementById('condition3').innerText = (response.data.forecast.forecastday[0].day.condition.text);
        document.getElementById('icon3').src = (response.data.forecast.forecastday[0].day.condition.icon);
        document.getElementById('temp3').innerHTML = `${response.data.forecast.forecastday[0].day.avgtemp_c}<sup>0</sup>C`;
    })
}

fetchWeather(defaultCity)

const formatDay = (dateStr) => {
    return new Intl.DateTimeFormat("en", {
      weekday: "long",
    }).format(new Date(dateStr));
};
