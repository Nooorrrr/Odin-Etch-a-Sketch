window.onload = createGrid(16);

//get number of pixels through prompts 
function promptUser() {
  var num = window.prompt("Please enter a number between 1 and 64");
  if (num > 64 || num < 1) {
    alert("Please enter a number between 1 and 64");
  } else {
    createGrid(num);
  }
}

function createGrid(num) {
  // Clear the grid
  document.querySelector('.container').innerHTML = "";
  // Create a grid of divs
  for (let j = 0; j < num * num; j++) {
    let pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = `${100 / num}%`; // Calculate the width
    pixel.style.height = `${100 / num}%`; // Calculate the height
    

    // Add event listener for hover effect
     pixel.addEventListener('mouseover', () => {
      pixel.style.backgroundColor = selectedColor();
      if (randomMode){
        pixel.style.backgroundColor = getRandomColor();
      }

      if (eraserMode){
        pixel.style.backgroundColor = '#fff';
      }
  
    });
    document.querySelector('.container').append(pixel);
   
  }
}

function GridTransparent() {
  let pixels = document.querySelectorAll('.pixel');
  if (pixels[0].style.border === "1px solid transparent") {
    pixels.forEach((pixel) => {
      pixel.style.border = "0.5px solid #666";
    });
  } else {
    pixels.forEach((pixel) => {
      pixel.style.border = "1px solid transparent";
    });
  }
}


function CLearGrid (){
  //not optimized funnction to refresh the page just to clear the grid
 /* document.getElementById('refreshButton').addEventListener('click', () => {
    location.reload(); // Reload the page
  });*/
  let pixels = document.querySelectorAll('.pixel');
  pixels.forEach((pixel) => {
    pixel.style.backgroundColor = '#fff';
  });


}

//function to randomize color 

let randomMode = false;

function randomModeEnabled(){
    randomMode = !randomMode;
    console.log("random mode :"+randomMode);
  return randomMode
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

//color bicker

function selectedColor(){
    return color = document.getElementById('colorbicker').value;  
}

//eraser

let eraserMode =false;

function eraserEnabled(){
  eraserMode = !eraserMode;
  console.log("eraser enabled :"+eraserMode);
  return eraserMode;
}