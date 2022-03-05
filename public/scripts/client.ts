import gameTile from './gameTile'
let tiles: gameTile[];
let index = 0;

/**
 * Call all functions necessary to set up the game
 */
function initGame() {
    drawGrid();
    setFlagLocations();
}

/**
 * @description A function to draw the starting grid for the game
 * @param rowTotal The number of rows to be drawn in the grid
 * @param columnTotal The number of columns to be drawn in the grid
 */
function drawGrid(rowTotal = 20, columnTotal = 20) {
    const container = <HTMLDivElement>document.getElementById('container')
    container.setAttribute('rows', rowTotal.toString());
    container.setAttribute('columns', columnTotal.toString())
    console.log(container);
    for (let i = 1; i < rowTotal + 1; i++) {
        for (let j = 1; j < columnTotal + 1; j++) {
            let box = new gameTile(index, i, j, container);
            tiles.push(box);
            index++;
        }
    }
}

function setFlagLocations(flagTotal = 99) {
    let flagsLeft = flagTotal;
    while (flagsLeft > 0) {
        index = 0;
        if (tiles.length > flagsLeft && Math.floor(Math.random() * 4) + 1 == 1) {
            tiles[index].square.setAttribute('flag', true.toString())
            tiles[index].square.innerHTML = '1';
        }
    }
}
