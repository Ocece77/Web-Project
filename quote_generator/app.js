const quoteText = document.getElementById("quote");
const btn = document.querySelector("button");
const url = 'https://api.api-ninjas.com/v1/quotes?category=life';

let options = {
  method: 'GET',
  headers: { 'x-api-key': 'SdGjFp9i8WhRWjfL7h7tsQ==3W0parhEDevj0wTz' }
}

btn.addEventListener('click', () => {
  quoteText.classList.remove("fade-anim")
  fetch(url , options)
  .then(data => data.json())
  .then(object =>{
    quoteText.innerText = `"${object[0]["quote"]}"`
    quoteText.classList.add("fade-anim")
  });
});

