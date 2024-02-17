const searchBtn = document.getElementById("searching-btn");
const definitionDiv = document.getElementById("word-definition");

/*using urban dictionnary api */
searchBtn.addEventListener("click", async () => {
  const userInput = document.getElementById("word");
  const url = `https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${userInput.value}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '3cad38ca1bmsh083be94cf52feecp1348adjsnc41182b678e0',
      'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
    }
  };
  

  try {
    const response = await fetch(url, options);
    const data = await response.json();

    definitionDiv.innerHTML =`
    <div class="col slidefade-animation">

          <div class="row ">
            <h1 class="text-main fw-bold mb-1 ">${userInput.value.toUpperCase()}</h1>
            <div class="horizontal-bar mb-3 "></div>
          </div>

          <div class="row mb-4">

            <div class="col-2">
            <p class="text-black-50 fs-6">${data["list"]["0"]["thumbs_up"]} <i class=" fa-solid fa-thumbs-up" style="color: var(--main-color);"></i></p>
            </div>
            
            <div class="col">
            <p class="text-black-50 fs-6">${data["list"]["0"]["thumbs_down"]} <i class="fa-solid fa-thumbs-down" style="color: var(--main-color);"></i></p>
            </div>

          </div>

          <p class="fs-5">${data["list"]["0"]["definition"]}</p>
          <div class="row">
            <div class="col-1">
              <div class="vertical-bar"></div>
          </div>

          <div class="col">
            <p class="fst-italic">${data["list"]["0"]["example"]}</p>
          </div>

          </div>
        </div>
      </div>
    `
 

    console.log(data); 


  } catch (error) {
   const e = "This word doesn't exist or isn't in this dictionnary"
    definitionDiv.innerHTML =`  <div class="row">
    <p class=" fs-3  mb-3">${e}</p>
    <div class="horizontal-bar mb-3"></div>
  </div>`
    console.error(e);
  }
});
  
