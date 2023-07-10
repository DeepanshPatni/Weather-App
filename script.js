// const url = 'https://open-weather13.p.rapidapi.com/city/london';


let city ="kanpur";
let info;

function data(city)
{
    const url = "https://api.weatherapi.com/v1/current.json?key=65b5d0a3c8ce4e1d82925213231007&q=" +city+ "&aqi=no";

    const options = {
	method: 'GET',
    };

    fetch(url ,options)
        .then(response => response.json())
        .then((response) => {
            console.log(response);
            $(".humidity").text(response.current.humidity+"%");
            $(".humidity-info").text("Humidity is "+response.current.humidity+"%");
            $(".temp").text(response.current.temp_c+"°C");
            $(".temp-info").text("Temperature is "+response.current.temp_c+"°C");
            $(".feels-like").text("Feels like "+response.current.feelslike_c+"°C");
            $(".speed").text(response.current.wind_kph+" km/hr");
            $(".speed-info").text("Wind speed is "+response.current.wind_kph+" km/hr");
            $(".dirn").text("Wind direction is "+response.current.wind_dir);
            $(".degree").text("Wind degree is "+response.current.wind_degree+"°");
            $(".cloud").text("Cloud cover is "+response.current.cloud+"%");
            $(".text").text(response.current.condition.text);
            $("span").text(city[0].toUpperCase() + city.slice(1));
        })
        .catch(err => console.error(err));
}

document.querySelector(".btn").addEventListener("click",function(){
    city = document.querySelector("input").value;
    data(city);
});
$("body").keydown(function(event){
    if(event.key == "Enter")
    {
        city = document.querySelector("input").value;
        data(city);
    }
});

data("Lucknow");