let gridSize = 600;

let numberOfCells = 16;

const sketchArea = document.querySelector("#sketch-area");

const gridButton = document.querySelector(".grid-button");

const toggleButton = document.querySelector(".toggle-button");

gridButton.addEventListener("click", resetGrid);

toggleButton.addEventListener("click", toggleColor);

let toggle = true;

let blackColor = `rgba(0, 0, 0, 0.2)`

sketchArea.style.width = sketchArea.style.height = `${gridSize}px`;

function toggleColor(){

    if(toggle){
        toggleButton.innerText = "Use Blacks";
        toggle = false;
    } else {
        toggleButton.innerText = "Use Random Colors";
        toggle = true;
    }

}

function highlightCell(){

    let startOpacity = 0.2;

    let randomColor = `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${startOpacity})`;

    if(!this.style.backgroundColor){
        if(toggle){
            this.style.backgroundColor = blackColor;
        } else {
            this.style.backgroundColor = randomColor;
        }
    } else {
        let currentColor = this.style.backgroundColor;

        let rgbPart = currentColor.slice(0, currentColor.lastIndexOf(','));

        let currentOpacity = parseFloat(currentColor.slice(currentColor.lastIndexOf(',') + 1));

        if(currentOpacity < 0.9){
            let newOpacity = Math.min(currentOpacity + 0.2, 1);

            this.style.backgroundColor = `${rgbPart}, ${newOpacity})`;

        }
    }


}

function createGrid(cells){

    for(let i = 0; i < (cells * cells); i++){
        let cell = document.createElement("div");
        cell.style.width = cell.style.height = `${gridSize / (cells) - 2}px`;
        cell.classList.add("cell");
        sketchArea.appendChild(cell);
    
        cell.addEventListener("mouseover", highlightCell);
    }
}


function resetGrid(){

    let newCells;
    do {
        newCells = prompt("Enter a number between 1 and 100");
    } while (newCells < 0 || newCells > 100);

    numberOfCells = newCells;
    deleteGrid();
    createGrid(numberOfCells);
}

function deleteGrid(){
    sketchArea.replaceChildren();
}

createGrid(16);