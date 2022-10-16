const grid = document.getElementById("grid-container");


// Creates a 16x16 grid on load
makeGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

makeGrid()