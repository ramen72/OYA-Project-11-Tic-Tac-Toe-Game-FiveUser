// Select HTML Element
const board = document.querySelector("#board")
const winner = document.querySelector("#winner")
const resetBtn = document.querySelector("#resetBtn")

// Create Array with null
let cells = Array(25).fill(null)
let currentPlayer = "X";

// Declare Start Game Function 
function startGame(){
    for( let i=0; i < 25; i++){
        const cell=  document.createElement("div")
        cell.classList.add("cell")
        // cell.textContent = i
        cell.dataset.indexnumber = i;
        cell.addEventListener("click",handleClick)
        board.appendChild(cell)
    }
}

// Call startGame Function
startGame()

// Handel Click Function Declare
function handleClick(e) {
    let indexNumber = e.target.dataset.indexnumber
    // console.log(cells[indexnumber]);
    
    cells[indexNumber] = currentPlayer;
    e.target.textContent = currentPlayer;
    e.target.classList.add("taken")
    let result = checkWinner();
    if( result ){
        winner.textContent = `${result} is win`
        board.style.pointerEvents = "none";
        resetBtn.style.display = "inline-block"
    }else{
        currentPlayer = currentPlayer === "X" ? "0" : "X";
    }
}

// Check Winner Function Declare
function checkWinner() {
    const combination = [
        [0,1,2],
        [1,2,3],
        [2,3,4],
        [5,6,7],
        [6,7,8],
        [7,8,9],
        [10,11,12],
        [11,12,13],
        [12,13,14],
        [15,16,17],
        [16,17,18],
        [17,18,19],
        [20,21,22],
        [21,22,23],
        [22,23,24],
        [0,5,10],
        [5,10,15],
        [10,15,20],
        [1,6,11],
        [6,11,16],
        [11,16,21],
        [2,7,12],
        [7,12,17],
        [12,17,22],
        [3,8,13],
        [8,13,18],
        [13,18,23],
        [4,9,14],
        [9,14,19],
        [14,19,24],
        [0,6,12],
        [6,12,18],
        [12,18,24],
        [1,7,13],
        [7,13,19],
        [2,8,14],
        [5,11,17],
        [11,17,23],
        [10,16,22],
        [4,8,12],
        [8,12,16],
        [12,16,20],
        [3,7,11],
        [7,11,15],
        [2,6,10],
        [9,13,17],
        [13,17,21],
        [14,18,22]
    ]
        for ( const item of combination){
            [a,b,c] = item
            if ( cells[a] && cells[a] === cells[b] && cells[a] === cells[c] ){
                return cells[a]
            }
        }
        return cells.includes(null) ? null : "Draw";
}

// Add Click Event to Reset button
resetBtn.addEventListener("click",()=>{
    window.location.reload();
})