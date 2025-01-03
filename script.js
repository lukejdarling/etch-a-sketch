let gridSize = 600;

let numberOfCells = 16;

const sketchArea = document.querySelector("#sketch-area");

sketchArea.style.width = sketchArea.style.height = `${gridSize}px`;

function highlightCell(){
    this.style.backgroundColor = "black";
}

for(let i = 0; i < (numberOfCells * numberOfCells); i++){
    let cell = document.createElement("div");
    cell.style.width = cell.style.height = `${gridSize / (numberOfCells) - 2}px`;
    cell.classList.add("cell");
    sketchArea.appendChild(cell);

    cell.addEventListener("mouseover", highlightCell);

}