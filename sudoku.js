var numSelected = null;
var tileSelected = null;

var errors = 0;

var board = [
    "--74916-5",
    "2---6-3-9",
    "-----7-1-",
    "-586----4",
    "--3----9-",
    "--62--187",
    "9-4-7---2",
    "67-83----",
    "81--45---"
]

var solution = [
    "387491625",
    "241568379",
    "569327418",
    "758619234",
    "123784596",
    "496253187",
    "934176852",
    "675832941",
    "812945763"
]

window.onload = function() {
    setGame();
}

function setGame() {
    for(let i = 1; i <= 9; i++) {
        const number = document.createElement('div')
        number.id = i
        number.innerText = i
        number.addEventListener("click", selectNumber);
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            const tile = document.createElement('div')
            tile.id = r.toString() + "-" + c.toString();
            if(board[r][c] !== '-') {
                tile.innerText = board[r][c]
                tile.classList.add("tile-start");
            }
            if(r === 2 || r === 5) {
                tile.classList.add("horizontal-line");
            }
            if(c === 2 || c === 5) {
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click", selectTile);
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}

function selectNumber() {
    if(numSelected !== null) {
        numSelected.classList.remove('number-selected')
    }
    numSelected = this
    numSelected.classList.add('number-selected')
}

function selectTile() {
    let r = parseInt(this.id[0])
    let c = parseInt(this.id[2])
    if(numSelected !== null && this.innerText === '' && numSelected.innerText === solution[r][c]) {
        this.innerText = numSelected.innerText
    } else {
        errors++
        document.getElementById("errors").innerText = errors
    }
}