/***
 * @classdesc A class to create and manage tiles on the game board
 */
export default class gameTile {
    square: HTMLDivElement;
    index: number;
    location: [number, number];

    /**
     * A function to create new instances of game tiles
     * @param index A number used to differentiate between different tiles on the screen
     * @param row The row in which to place this tile
     * @param column The column in which to place this tile
     * @param parent The grid this square should be added to after it's creation
     */
    constructor(index: number, row: number, column: number, parent = document.body) {
        this.square = document.createElement('div')
        this.index = index;
        this.location = [row, column]
        this.square.setAttribute('index', index.toString())
        this.square.style.border = '1px solid black';
        this.square.style.gridRow = row.toString() + ' / span 1'
        this.square.style.gridColumn = column.toString() + ' / span 1'
        const text = document.createTextNode("");
        this.square.appendChild(text);
        parent.appendChild(this.square);
    }
}