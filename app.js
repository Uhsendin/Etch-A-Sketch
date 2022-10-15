const grid = document.getElementById("grid-container");


// Creates a 16x16 grid on load
function gridOnLoad() {
  for (let i = 1; i < 273; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
  }
}

gridOnLoad()