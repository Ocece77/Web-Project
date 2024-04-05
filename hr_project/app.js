

//génére les cartes 

let horaires = [
  {
    date: "30 Juin",
    day :"Journée intensive" ,
    start : "9h30",
    end : "20h30"
  },
  {
    date: "04 Juillet",
    day :"Formation" ,
    start : "12h30",
    end : "20h30"
  },
  {
    date: "05 Juillet",
    day :"Formation" ,
    start : "12h30",
    end : "20h30"
  },
  {
    date: "07 Juillet",
    day :"Journée classique" ,
    start : "12h30",
    end : "18h30"
  },
  {
    date: "08 Juillet",
    day :"Heure supp (exceptionelle)" ,
    start : "10h30",
    end : "11h30"
  }
]

let carouselContainer = document.getElementById("carousel-container");
let generateCard = ()=>{
  horaires.forEach((horaire) => {
    return carouselContainer.innerHTML += `<div class="carousel-item ">
    <div class="col d-flex justify-content-center ">
    <div class="card col-9">
      <div class="card-body">
        <h5 class="card-title">${horaire.date}</h5>
        <p class="card-text">${horaire.day}</p>
        <p class="card-text"><span class="badge text-light">${horaire.start}</span> <span class="badge bg-nightblue text-light">${horaire.end}</span></p>
        <a href="#" class="btn bg-nightblue text-light">Enregistrer cette horaire</a>
      </div>
    </div>
    </div>
    
    </div>`
  }

  )

  }


//appelle  openweather API
let weatherTemp = document.getElementById("weather-temperature");
let weatherImg = document.getElementById("weather-img");

const key = "0e6f971e90046c4413777ba6ed031375";


let getWeather = () =>{;
let url = `https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=${key}&units=metric`

fetch(url)
  .then(resp => resp.json())
  .then(data =>{
    console.log(data)
    weatherTemp.innerText = `${data.main["temp"]}°c `
    weatherImg.innerHTML =  `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`
  })
  .catch(()=>{
    weatherTemp.innerHTML =`<p class="text-light mb-5">error</p>`;
  })

}

window.addEventListener("DOMContentLoaded", ()=>{
  getWeather()
  generateCard()
})


