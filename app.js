const grid = document.getElementById("grid-container");
const gridSquares = document.querySelector("div");


// Creates a 16x16 grid on load
makeGrid = () => {
  for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("square");
    grid.appendChild(div);
  }
};

// Removes class and adds black color CSS class
gridSquares.addEventListener("mouseover", function(event) {
  event.target.classList.replace("square", "black-square")
});


makeGrid();
