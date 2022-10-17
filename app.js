const grid = document.getElementById("grid-container");
const gridSquares = document.querySelector("div");
const rainbowBtn = document.getElementsByClassName("rgb");
const clearBtn = document.getElementsByClassName("clear");
const eraserBtn = document.getElementsByClassName("erase");
const shadow = document.getElementsByClassName("shadow");

// Creates a 16x16 grid on load
makeGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

makeGrid();

// Creates a random RGB color for user
colorGen = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  gridSquares.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
};

// Removes class and adds black color CSS class
gridSquares.addEventListener("mouseover", function (event) {
  event.target.classList.replace("square", "black-square");
});
