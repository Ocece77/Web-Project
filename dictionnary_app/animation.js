
const appBtn = document.getElementById("app-btn");
const defContainer = document.getElementById("def-container");
const appPresentation = document.getElementById("app-presentation");

window.addEventListener("DOMContentLoaded", ()=>{
  setTimeout(()=> appPresentation.classList.add("fade-animation"),
                 appPresentation.classList.remove("invisible"),  500)
});

appBtn.addEventListener("click",()=>{
  appPresentation.classList.add("moveout-animation");
  setTimeout(()=> { appPresentation.classList.add("d-none") },600);
  setTimeout(()=>{ defContainer.classList.add("fade-animation")
    defContainer.classList.remove("d-none")} , 1300);
});

