const gridSize = 600;

let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");

sketchArea.style.width = `${gridSize}px`;
sketchArea.style.height = `${gridSize}px`;

function createGridCells(){
    for(let i = 0; i < (rows * cols); i++){
        const gridCell = document.createElement("div");

        gridCell.style.width = `${(gridSize / cols) - 2}px`;
        gridCell.style.height = `${(gridSize / rows) - 2}px`;
        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);
    }
}

createGridCells();