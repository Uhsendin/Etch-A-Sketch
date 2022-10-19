function makeGrid(size) {
  let grid = document.querySelector(".grid-board");
  let div = grid.querySelectorAll("div")
  div.forEach((div) => div.remove());
  grid.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  grid.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  for (let i = 0; i < 256; i++) {
    let div = document.createElement("div");
    div.style.backgroundColor = "white";
    grid.insertAdjacentElement("beforeend", div);
  }
}
makeGrid(16)

function gridSize(input) {
  makeGrid(input)
}
