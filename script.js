var num = document.getElementById("range").value;

const input = document.querySelector("#range"),
      number = document.querySelector(".number");

      input.addEventListener("input", () => {
        number.textContent = input.value;
      });

console.log("hello");

window.onload = function() {
  for (let j = 0; j < num * num; j++) {
      let pixel = document.createElement("div");
      pixel.className = "pixel";
      pixel.style.width = `${100 / num}%`; // Calculate the width
      pixel.style.height = `${100 / num}%`; // Calculate the height
      document.querySelector('.container').append(pixel);
  }
}



