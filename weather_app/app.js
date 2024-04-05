const homeText = document.getElementById("home-text");
const homeTitle = document.getElementById("home-title");
const homeSubtitle = document.getElementById("home-subtitle");
const homeBtn = document.getElementById("home-btn");
const weatherApp = document.getElementById("weather-app");
const body = document.querySelector("body");

window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=>{homeTitle.classList.add("fade-in"),
                 homeTitle.classList.remove("invisible")}, 700)

  setTimeout(()=>{homeSubtitle.classList.add("fade-in"),
                 homeSubtitle.classList.remove("invisible")}, 1700)

  setTimeout(()=>{homeBtn.classList.add("fade-in"),
                 homeBtn.classList.remove("invisible")}, 2300)

})


homeBtn.addEventListener('click', ()=>{
  homeText.classList.add("fade-out")
  setTimeout(()=>{homeText.classList.add("d-none"),
                  body.style.backgroundColor = "var(--color-darkbluegreen)",
                  body.classList.add("color-change") }
  , 1000);
  setTimeout(()=>{
    weatherApp.classList.add("fade-in"),
    weatherApp.classList.remove("d-none")
  } , 1800)


})


// API parts


let searchBtn = document.getElementById("search-btn");
let weatherInfo = document.getElementById("weather-info");
let weatherImg = document.getElementById("weather-img");

const key = "0e6f971e90046c4413777ba6ed031375";

let getWeather = () =>{
let cityInput = document.getElementById("weather-city");
let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&appid=${key}&units=metric`

fetch(url)
  .then(resp => resp.json())
  .then(data =>{
    console.log(data)
    weatherInfo.innerHTML = ` 
    <div class="weather-content col-8 fade-in">
      <h1>${cityInput.value}</h1>
      <p class="text-light" >${data.weather[0].description}</p>
      <h2>${data.main["temp"]}°C</h2>

      <div class="row text-light font-weight-bold">

      <div class="col-md-4 ">
      <p>Humidity - ${data.main["humidity"]}%</p>
      </div>

      <div class="col-md-4 ">
      <p>Min - ${data.main["temp_min"]}°C</p>
      </div>
      
      <div class="col-md-4" >
      <p>Max - ${data.main["temp_max"]}°C</p>
      </div>

      </div>

    </div>
  
    <div class="col-2 align-items-center justify-content-center">
     <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">
    </div>`
  })
  .catch(()=>{
     weatherInfo.innerHTML =`<p class="text-light mb-5">Location wasn't found or city name invalid</p>`;
  })

}
searchBtn.addEventListener("click" ,  getWeather);
window.addEventListener("DOMContentloaded", getWeather);
