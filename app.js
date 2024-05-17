// Generate project 

const projects = [
  {
    id : 1,
    name : "Meme generator",
    desc : "An online tool for creating amusing memes using personalized images and text",
    link : "joke_generator/index.html",
    img : "joke_generator/img/design.png",
    done : true

  },
  {
    id : 2,
    name : "Weather App",
    desc : "An application that provides real-time weather information for any city in the world.",
    link : "weather_app/index.html",
    img : "weather_app/img/design.png",
    done : true

  },

  {
    id : 3,
    name : "Random Quote App",
    desc : "This Random Quote App is a web application designed to display random quotes to users",
    link : "quote_generator/index.html",
    img : "quote_generator/image/design.png",
    done : true

  },

  {
    id : 4,
    name : "Dictionary App",
    desc : "A reference application that allows you to quickly look up word definitions and obtain linguistic information.",
    link : "dictionnary_app/dictionnary_app.html",
    img : "dictionnary_app/img/design.png",
    done : true

  },

  {
    id : 5,
    name : "Human ressources tools",
    desc : "I created the main landing page of a human ressources website for a stage application",
    link : "hr_project/index.html",
    img : "hr_project/image/design.png",
    done : true
  },

  {
    id : 6,
    name : "calculatrice",
    desc : "Not available yet",//"An app that displays inspiring or funny quotes randomly with each visit.",
    link : "",
    img : "image/no_available.jpeg",
    done : false

  },

]


const cardList = document.getElementById("card-list");
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const githubLink = document.getElementById("github-link");



window.addEventListener("DOMContentLoaded", ()=>{
//generate the cards
  const addProject = projects.map(project => {

    let status = project["done"] == false ? "disabled" : ""

    return `<div class="col">
  <div class="card d-none shadow h-100" id="${project.id}">
    <h5 class="card-header card-bg-header ">${project.name}</h5>
    <img src="${project.img}" alt="project preview image" class="card-img-top  ">
    <div class="card-body">
      <p class="card-text" >${project.desc}</p>
      <a href="${project.link}" target="_blank" class="btn btn-bg text-light shadow ${status}">See the project</a>
    </div>
  </div>
</div>`
}).join('');



cardList.innerHTML = addProject;


//Animate each elements
const cards = document.querySelectorAll(".card");
const cardDelay = 3000;

cards.forEach((card, index) => {
  setTimeout(() => {
    card.classList.remove("d-none");
    card.classList.add("animation");
  }, cardDelay + (index * 200));
});

setTimeout(()=>{
            githubLink.classList.remove("d-none") ,
            githubLink.classList.add("animation2")} ,300);

setTimeout(() =>{title.classList.remove("d-none"), 
                title.classList.add("animation")}, 700);


setTimeout(() =>{
            subtitle.classList.remove("d-none") ,
            subtitle.classList.add("animation")} , 1500);

});

