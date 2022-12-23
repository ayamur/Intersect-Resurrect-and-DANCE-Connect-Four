
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
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [15, 22, 29, 36],
  [2, 9, 16, 23],
  [9, 16, 23, 30],
  [16, 23, 30, 37],
  [3, 10, 17, 24],
  [10, 17, 24, 31],
  [17, 24, 31, 38],
  [4, 11, 18, 25],
  [11, 18, 25, 32],
  [18, 25, 32, 39],
  [5, 12, 19, 26],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [14, 22, 30, 38],
  [7, 15, 23, 31],
  [15, 23, 31, 39],
  [0, 8, 16, 24],
  [8, 16, 24, 32],
  [16, 24, 32, 40],
  [1, 9, 17, 25],
  [9, 17, 25, 33],
  [17, 25, 33, 41],
  [2, 10, 18, 26],
  [10, 18, 26, 34],
  [3, 11, 19, 27],
  [3, 9, 15, 21],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [20, 26, 32, 38]
  ]

  import * as soundFX from "./audio.js";

  const shemp = new Audio("assets/audio/music/Shemp_80_D.wav")
  

  /*---------------------------- Variables (state) ----------------------------*/
  let artifactBoard, turn, winner, tie
  
  
  /*------------------------ Cached Element References ------------------------*/
  
  const artifactSlotEls = document.querySelectorAll(".slot")
  const messageEls = document.querySelector(".message")
  const artifactBoardEl = document.querySelector(".artifactboard")
  const resetButtonEl = document.querySelector(".reset")
  const playAudioBtn = document.getElementById("playmusic")
  const pauseAudioBtn = document.getElementById("pausemusic")

  /*----------------------------- Event Listeners -----------------------------*/
  
  artifactSlotEls.forEach(artifact => artifact.addEventListener("click", handleClick))
  resetButtonEl.addEventListener("click", resetGame)
  playAudioBtn.addEventListener("click", playAudio)
  pauseAudioBtn.addEventListener("click", pauseAudio)
  /*-------------------------------- Functions --------------------------------*/
  
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

function resetGame(){
  soundFX.playResetButtonChime()
  init()
}

function render() {
  updateBoard()
  updateMessages()
}

function updateBoard() {
  artifactBoard.forEach(function(slot, slotIdx) {
    if (slot === -1) {
      artifactSlotEls[slotIdx].innerHTML = '<img id="iconcyan" src="assets/images/cyan_sigil_1.png">';
      
    } else if (slot === 1) {
      artifactSlotEls[slotIdx].innerHTML = '<img id="iconred" src="assets/images/red_sigil_1.png">';
    }
    else if (slot === null) {
      artifactSlotEls[slotIdx].textContent = " "
    }
  })
}
function updateMessages() {
  if (!winner & !tie) {
    messageEls.textContent = `It's ${turn === 1 ? "Miss Wui-Jia" : "Captain Mothman"}'s turn!`
  } else if (!winner && tie) {
    messageEls.textContent = `The deities continue the battle, as this is a TIE!`
  } else {
    messageEls.textContent = `${turn === 1 ? "Miss Wui-Jia" : "Captain Mothman"} wins!`;
  }
}

function handleClick(evt) {
  const slotIdx = parseInt(evt.target.id.replace("slot", ""))
  if (artifactBoard[slotIdx] !== null || winner === true) {
    return
  } 
  let startPoint = 35
  while (artifactBoard[slotIdx + startPoint] !== null) {
    startPoint -= 7
  }
  artifactBoard[slotIdx + startPoint] = turn
  tieCheck()
  winnerCheck()
  switchTurn()
  switchTurnAudio()
  render()
}


function tieCheck() {
  if (!artifactBoard.includes(null)) {
    tie = true
    soundFX.playBellDing()
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
      soundFX.playBoom()
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

function switchTurnAudio() {
  if (turn === 1) {
    soundFX.playRockPop1()
  }
  if (turn === -1) {
    soundFX.playRockPop2()
  }
}

function playAudio() {
  shemp.play();
  shemp.volume = .15;
}

function pauseAudio() {
  shemp.pause();
}
