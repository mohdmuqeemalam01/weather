const apikey = "0da1ddeb35a6c6c02ac47f762bdca47d";
const urlid = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

const city2 = document.querySelector(".form-control");
const btn = document.querySelector("button");
const sound=new Audio('images/sound.mp3');
const city = document.querySelector(".weather-city");
const temp = document.querySelector(".weather-text");
const Humidity = document.querySelector(".humidity");
const WindSpeed = document.querySelector(".wind-speed h4");


async function chechweather(sk) {

    const response = await fetch(`${urlid}&q=${sk}&appid=${apikey}`);
    var data = await response.json();
    // console.log(data);
    city.innerHTML = data.name;
    temp.innerHTML =Math.round(data.main.temp) + "<sup>°c </sup> <spam>";
    Humidity.innerHTML = data.main.humidity + "<span>%<br> Humidity</span>";
    WindSpeed.innerHTML = data.wind.speed + "<span> km/h <br>wind speed</span>";
}


city2.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
     sound.play();
        sk = (city2.value);
        // console.log(sk);
        chechweather(sk);
    }

        
    
})
btn.addEventListener('click',()=>{
    sound.play();
        sk = (city2.value);
        // console.log(sk);
        chechweather(sk);
})
