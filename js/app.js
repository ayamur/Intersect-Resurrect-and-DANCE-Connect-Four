//! console.log("Padded room check!")
/*-------------------------------- Constants --------------------------------*/
const winCombos = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [9, 10, 11, 12],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
  [15, 16, 17, 18],
  [16, 17, 18, 19],
  [17, 18, 19, 20],
  [21, 22, 23, 24],
  [22, 23, 24, 25],
  [23, 24, 25, 26],
  [24, 25, 26, 27],
  [28, 29, 30, 31],
  [29, 30, 31, 32],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [35, 36, 37, 38],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [7, 15, 23, 31],
  [15, 23, 31, 34],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [10, 18, 26, 34],
  [14, 22, 30, 38],
  [20, 26, 32, 38],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [10, 16, 22, 28],
  [0, 8, 16, 24],
  [0, 7, 14, 21],
  [1, 9, 17, 25],
  [1, 8, 15, 22],
  [2, 10, 18, 26],
  [2, 9, 16, 23],
  [3, 11, 19, 27],
  [3, 10, 17, 24],
  [4, 11, 18, 25],
  [5, 12, 19, 26],
  [6, 13, 20, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [5, 11, 17, 23],
  [6, 12, 18, 24]
  ]
              


/*---------------------------- Variables (state) ----------------------------*/
let artifactBoard, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const artifactSlotEls = document.querySelectorAll(".slot")
const messageEls = document.querySelector(".message")
const artifactBoardEl = document.querySelector(".artifactboard")
const resetButtonEl = document.querySelector(".reset")

/*----------------------------- Event Listeners -----------------------------*/
artifactBoardEl.addEventListener("click", handleClick)
resetButtonEl.addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/

// ! try a for loop with (n) to push into new array as in engineering channel answer (thanks Emily!)

init()

function init() {
  artifactBoard = 
  [
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null,
    null, null, null, null, null, null, null
  ]
  turn = 1 
  winner = false
  tie = false
  render()
}

function render() {
  updateBoard()
  updateMessages()
}

function updateBoard() {
  artifactBoard.forEach(function(slot, slotIdx) {
    if (slot === -1) {
      artifactSlotEls[slotIdx].textContent = "🔴"
    } else if (slot === 1) {
      artifactSlotEls[slotIdx].textContent = "🔵"
    }
    else if (slot === null) {
      artifactSlotEls[slotIdx].textContent = " "
    }
  }) 
}

function updateMessages() {
  if (!winner & !tie) {
    messageEls.textContent = `It's ${turn === 1 ? "🔵" : "🔴"}'s turn!`
  } else if (!winner && tie) {
    messageEls.textContent = `👔`
  } else {
    messageEls.textContent = `Congrats! ${turn === 1 ? "🔵" : "🔴"} wins!`
  }
}

function handleClick(evt) {
  const slotIdx = parseInt(evt.target.id.replace("slot", " "))
  if (artifactBoard[slotIdx] !== null || winner === true ) {
    return
  }
  placeArtifact(slotIdx)
  tieCheck()
  winnerCheck()
  switchTurn()
  render()
}

function placeArtifact(slotIdx){
  (artifactBoard[slotIdx] = turn)
}

function tieCheck() {
  if (!artifactBoard.includes(null)) {
    tie = true
  }
}

function winnerCheck() {
  winCombos.forEach(function(element){
    let first = artifactBoard[element[0]]
    let second = artifactBoard[element[1]]
    let third = artifactBoard[element[2]]
    let fourth = artifactBoard[element[3]]
    let total = first + second + third + fourth
    let absValue = Math.abs(total)
    if (absValue === 4) {
      winner = true
    }
  })
}

function switchTurn() {
  if (winner === true) {
    return
  } else if (winner === false) {
    turn = (turn * -1)
  }
}