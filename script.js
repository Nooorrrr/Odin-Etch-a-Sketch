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
    document.querySelector('.container').append(pixel);
  }
}

function GridTransparent() {
  let pixels = document.querySelectorAll('.pixel');
  if (pixels[0].style.border === "1px solid transparent") {
    pixels.forEach((pixel) => {
      pixel.style.border = "1px solid #666";
    });
  } else {
    pixels.forEach((pixel) => {
      pixel.style.border = "1px solid transparent";
    });
  }
}

function CLearGrid (){
    let pixels = document.querySelectorAll('.pixel');
    pixels.forEach((pixel)=>{
      pixel.style.backGroundColor = "#fff";
    })
}
