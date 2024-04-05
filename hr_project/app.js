
//obtention du prénom

const inputPrenom = document.getElementById("input-prenom");
const btnPrenom = document.getElementById("btn-prenom");
const helloMessage = document.getElementById("hello-message");
const askName = document.getElementById("ask-name");
const navContainer = document.getElementById("navbar-container");
const mainContainer = document.getElementById("main-container");


let getName = () =>{
  return helloMessage.innerText =  `Hi ${inputPrenom.value} !`;
}



//générer des messages

let messages = [
{
  id : 1,
  text :  "Nous préparons du poulet rôti pour le pot de départ de Mathilde, veuillez ne pas le manger cette fois-ci 😡",
},

{
  id : 2,
  text :  "Notre progression ne cesse de s'accélérer 🚀 De nouvelles fonctionnalités et du contenu exclusif sont désormais disponibles sur Bizneo !",
},

{
  id : 3,
  text :  "L'aventure ne fait que commencer ! 🌟 De plus en plus de fonctionnalités passionnantes et de contenu pertinent vous attendent sur Ocean's Lifes. Rejoignez-nous dans cette belle aventure !"
},

{
  id : 4,
  text : "Les bonnes nouvelles ne cessent de s'accumuler ! 🎈 Explorez les dernières fonctionnalités et les contenus inédits dès aujourd'hui. Nous sommes ravis de partager cette expérience avec vous !"
},

{
  id : 5,
  text :" 🌠 Venez découvrir nos toutes nouvelles fonctionnalités et le contenu exclusif que nous avons préparé pour vous. Ensemble, avançons vers de nouveaux sommets !"
},
]

const messageDate  = document.getElementById("message-date");
const messageText  = document.getElementById("message-text");

let i = 0;

let generateMessage = () =>{
  messageText.classList.add("fading");
      if ( i > messages.length - 1){
        i = 0
        messageText.innerHTML = (messages[i].text.length) < 110  ? `${messages[i].text}` :  `${messages[i].text.slice(0, 110)}...`;
      } else {
        messageText.innerHTML = (messages[i].text.length) < 110  ? `${messages[i].text}` :  `${messages[i].text.slice(0, 110)}...`;
        i++;
      }
      
    setTimeout(()=>{
      messageText.classList.remove("fading");
    },500)

   }



//génére les cartes 

let horaires = [
  {
    date: "03 Juillet",
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
    weatherTemp.innerText = `${Math.round(data.main["temp"])}°c `
    weatherImg.innerHTML =  `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="icon">`
  })
  .catch(()=>{
    weatherTemp.innerHTML =`<p class="text-light mb-5">error</p>`;
  })

}

window.addEventListener("DOMContentLoaded", ()=>{
  getWeather()
  generateCard()
 setInterval(generateMessage , 5000);
 const monthFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const date = new Date()
 messageDate.innerText = `${date.getDay()} ${monthFull[date.getMonth()]} ${date.getFullYear()}  `;

 btnPrenom.addEventListener("click", () =>{
  getName();
  console.log()
  askName.classList.add("d-none");
  mainContainer.classList.add("fading");
  navContainer.classList.remove("d-none");
  mainContainer.classList.remove("d-none");
})

})


