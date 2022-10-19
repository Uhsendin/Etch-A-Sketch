const grid = document.querySelector(".grid-board");
const div = grid.querySelectorAll("div");
function makeGrid(size) {
  div.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    div.addEventListener("mouseover", changeColor);
    div.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", div);
  }
}
makeGrid(16);

function gridSize(input) {
  makeGrid(input);
}

function changeColor() {
  this.style.backgroundColor = "black";
}
