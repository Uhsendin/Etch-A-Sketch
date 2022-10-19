const grid = document.querySelector(".grid-board");
const gridDivs = grid.querySelectorAll("div");
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

function gridSize(input) {
  makeGrid(input);
}

function changeColor() {
  this.style.backgroundColor = "black";
}

function clearGrid() {
  const gridSquare = document.querySelectorAll(".square")
  gridSquare.forEach(gridSquare => {
    gridSquare.style.backgroundColor = "white"
  })
}
