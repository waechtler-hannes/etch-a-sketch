const button = document.querySelector("#size");
const gridContainer = document.querySelector("#grid-container");

document.addEventListener("mouseover", (event) => {
    if (event.target.getAttribute("class") === "gridRow") {
        event.target.setAttribute("style", "background-color: black;")
    }
})

button.addEventListener("click", (event) => {
    if (event.target.getAttribute("id") === "size") {
        loadGrid(prompt("Enter new size:"));
    }
})

function loadGrid (size) {
    if (size >= 1 && size <= 100) {

        button.textContent = `Size (${size}x${size})`;

        grid.remove();

        const newGrid = document.createElement("div");
        newGrid.setAttribute("id", "grid");
        gridContainer.appendChild(newGrid);

        for (let i = 0; i < size; i++) {
            const gridColumn = document.createElement("div");
            gridColumn.setAttribute("class", "gridColumn");
            grid.appendChild(gridColumn);
            for (let j = 0; j < size; j++) {
            const gridRow = document.createElement("div");
            gridRow.setAttribute("class", "gridRow");
            gridColumn.appendChild(gridRow);
            }
        }        
    }
}

loadGrid(16);