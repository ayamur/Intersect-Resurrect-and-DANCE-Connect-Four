//! console.log("Padded room check!")
/*-------------------------------- Constants --------------------------------*/
const winCombos


/*---------------------------- Variables (state) ----------------------------*/
let artifactBoard, turn, winner, tie


/*------------------------ Cached Element References ------------------------*/
const artifactSlotEls = document.querySelectorAll(".slot")
const messageEls = document.querySelector(".message")
const artifactBoardEl = document.querySelector(".artifactBoard")
const resetButtonEl = document.querySelector(".reset")

/*----------------------------- Event Listeners -----------------------------*/
artifactBoardEl.addEventListener("click", handleClick)
resetButtonEl.addEventListener("click", init)


/*-------------------------------- Functions --------------------------------*/

// ! try a for loop with (n) to push into new array as in engineering channel answer (thanks Emily!)

init()

function init() {
  artifactBoard = [
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
    else if (square === null) {
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

function placeArtifact(){

}

function tieCheck() {

}

function winnerCheck() {

}

function switchTurn() {

}