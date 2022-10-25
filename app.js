const grid = document.querySelector(".grid-board");
const gridDivs = grid.querySelectorAll("div");

// Creates a 16x16 grid layout
function makeGrid(size) {
  gridDivs.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const square = document.createElement("div");
    square.addEventListener("mouseover", changeColor);
    square.classList.add("square");
    square.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", square);
  }
}
makeGrid(16);

// Takes user input for desired grid size
function gridSize(input) {
  makeGrid(input);
}

// Black Btn changes div color to black
function blackColor() {
  const gridSquare = document.querySelectorAll(".square");
  gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "black";
    });
  });
}

// Creates a random RGB color
function rgbGenerator() {
  var roundValue = Math.round,
    rndmValue = Math.random,
    maxNum = 255;
  return (
    "rgb(" +
    roundValue(rndmValue() * maxNum) +
    "," +
    roundValue(rndmValue() * maxNum) +
    "," +
    roundValue(rndmValue() * maxNum) +
    ")"
  );
}
console.log(rgbGenerator());

function rgbBtn() {
  const gridSquare = document.querySelectorAll(".square");
  gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.removeProperty("background-Color");
      gridSquare.style.backgroundColor = rgbGenerator()
    });
  });
}

// Changes grid to black
function changeColor() {
  this.style.backgroundColor = "black";
}

// Clears grid from any color changes
function clearGrid() {
  const gridSquare = document.querySelectorAll(".square");
  gridSquare.forEach((gridSquare) => {
    gridSquare.style.backgroundColor = "white";
  });
}

// Changes each grid div to white on mouseover
function eraserGrid() {
  const gridSquare = document.querySelectorAll(".square");
  gridSquare.forEach((gridSquare) => {
    gridSquare.addEventListener("mouseover", () => {
      gridSquare.style.backgroundColor = "white";
    });
  });
}
