const button = document.querySelector("#size");
const gridContainer = document.querySelector("#grid-container");

document.addEventListener("mouseover", (event) => {
    if (event.target.getAttribute("class") === "gridRow") {
        if (parseFloat(event.target.style.opacity) >= 0.1 && parseFloat(event.target.style.opacity) <= 0.9) {
            event.target.setAttribute("style", `${randomColor()} ${increaseOpacity(event.target)}`);
        } else if (parseFloat(event.target.style.opacity) === 1) {
            event.target.setAttribute("style", `${randomColor()} opacity: 1;`)
        } else {
            event.target.setAttribute("style", `${randomColor()} opacity: 0.1;`)
        }
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

function randomColor() {
    return `background-color: rgb(
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}, 
        ${Math.floor(Math.random() * 255)}
    );`
}

function increaseOpacity(target) {
    return `opacity: ${parseFloat(target.style.opacity) + 0.1};`
}

loadGrid(16);