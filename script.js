const grid = document.querySelector("#grid");

for (let i = 0; i < 16; i++) {
    const gridColumn = document.createElement("div");
    gridColumn.setAttribute("class", "gridColumn");
    grid.appendChild(gridColumn);
    for (let j = 0; j < 16; j++) {
    const gridRow = document.createElement("div");
    gridRow.setAttribute("class", "gridRow");
    gridColumn.appendChild(gridRow);
    }
}

document.addEventListener("mouseover", (event) => {
    if (event.target.getAttribute("class") === "gridRow")
    event.target.setAttribute("style", "background-color: black;")
})