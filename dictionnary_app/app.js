const searchBtn = document.getElementById("searching-btn");
const definitionDiv = document.getElementById("word-definition");
const dictionnaryApiUrl ="https://api.dictionaryapi.dev/api/v2/entries/en/";



searchBtn.addEventListener("click", ()=>{
  let userInput = document.getElementById("word");
  let url = 'https://corsproxy.io/?' + encodeURIComponent(`https://api.dictionaryapi.dev/api/v2/entries/en/${userInput.value}`);
   fetch(url)
   .then(resp => resp.json())
   .then(data =>{
    definitionDiv.innerHTML =`
    <div class="col">
          <h2 class="text-main fw-bold mb-3">${data.word}</h2>
          <p class="text-black-50 fs-6">${data.meanings[0].partOfSpeech}</p>
          <p class="fs-5">${data.meanings[0].definitions[0]["definition"]}</p>
          <div class="row">
            <div class="col-1">
              <div class="vertical-bar"></div>
          </div>
          <div class="col">
            <p class="fst-italic">${data.meanings[0].definitions[0]["example"]}</p>
          </div>
          </div>
        </div>
      </div>
    `
   } )
   .catch(()=> console.log())
   
})
