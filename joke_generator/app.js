const joke = document.getElementById("joke");
const btn = document.querySelector("button");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = ()=>{
  joke.classList.remove("fade-in")
  fetch(url)
  .then(data => data.json())
  .then(item => {
    joke.textContent = `${item.joke}`;
    joke.classList.add("fade-in")
  });
    
}

btn.addEventListener("click" , getJoke);
