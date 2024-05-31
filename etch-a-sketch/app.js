const gridRangeForm = document.querySelector('form');
    containerDraw = document.querySelector('.container-draw');
    colorInput = document.getElementById('color');
    multicolorBtn = document.getElementById('multicolor');
    eraser = document.getElementById('eraser');
    modeText = document.querySelector('.container-status-text');
    color = colorInput.value
    hexLetter = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
    multicolorMode = false
    eraserMode = false




/**Multicolor mode */
multicolorBtn.addEventListener('click', ()=>{
  multicolorMode = true
  eraserMode = false
  modeText.innerHTML = `The pen is on mode <span style="color:#FF0000" >m</span><span style="color:#FF0000">u</span><span style="color:#66CC66">l</span><span style="color:#FF9966">t</span><span style="color:#FFCCCC">i</span><span style="color:#FF0066">c</span><span style="color:#FFCCCC">o</span><span style="color:#FF0066">l</span><span style="color:#FF0066">o</span><span style="color:#FF0066">r</span>`
})

/*eraser mode*/
eraser.addEventListener('click', ()=>{
  eraserMode = true
  multicolorMode = false
  modeText.innerHTML = `The pen is on mode <span style="color : #FFBBCC">eraser</span>`
})

/*Hover on each cube */
const cubeOnChange =()=>{

  const cubes = document.querySelectorAll(".container-draw-cube")

    cubes.forEach((cube) => {
      cube.addEventListener('mouseover', ()=>{
        cube.style.background = eraserMode ? color="#fff" : multicolorMode ? randomHexColor() : color     
      })
    });

  eraserMode = false
}

/*Initialize the grid when we comes on the homepage */
window.addEventListener("DOMContentLoaded", ()=>{
  containerDraw.style.gridTemplateColumns = `repeat(16, 1fr)`;
  containerDraw.style.gridTemplateRows = `repeat(16 , 1fr)`;

  for (let i = 0; i <= (16)**2 - 1 ; i++){
    containerDraw.innerHTML += `<div class="container-draw-cube"></div>`;
  }

  cubeOnChange();
  
})

/*generate random hex color */
const randomHexColor = ()=>{
  let newColor = "#" 
  for (let i = 0 ; i  < 6; i++){
     randomLetter = hexLetter[Math.ceil(Math.random() * hexLetter.length - 1)]
     newColor += randomLetter;
  }
  return newColor
  
}

/*generate random hex color */
colorInput.addEventListener('change' , ()=>{
 color = colorInput.value
 multicolorMode = false
 eraserMode = false
 modeText.innerHTML = `The pen color is <span style="color:${color}">${color}</span>`
})

/*generate a new grid */
gridRangeForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  containerDraw.innerHTML = ``;
  const formEntries =  new FormData(gridRangeForm);
  gridNum = formEntries.get("gridrange")
  containerDraw.style.gridTemplateColumns = `repeat(${ gridNum} , 1fr)`;
  containerDraw.style.gridTemplateRows = `repeat(${ gridNum} , 1fr)`;

  for (let i = 0; i <= (gridNum)**2 - 1 ; i++){
    containerDraw.innerHTML += `<div class="container-draw-cube"></div>`;
  }

  cubeOnChange();

})




