
const resetButtonChime = new Audio("assets/audio/sfx/EarthyChimes.wav")
const hiss = new Audio("assets/audio/sfx/alligator hiss.wav")
const ghostBreath = new Audio("assets/audio/sfx/Ahhhh Breath.wav")
const lightning = new Audio("assets/audio/sfx/lightning strike 01.wav")
const boom = new Audio("assets/audio/sfx/low end boom sweetener 01.wav")
const bellDing = new Audio("assets/audio/sfx/bell01.wav")
const rockPop1 = new Audio("assets/audio/sfx/Tongue Pop H.wav")
const rockPop2 = new Audio("assets/audio/sfx/Tongue Pop L.wav")


const midEvil = new Audio("assets/audio/music/00-Midevil D.mp3")
const nuke = new Audio("assets/audio/music/00-nuclear.mp3")
const fell = new Audio("assets/audio/music/I Fell_bass2_70_A.wav")
const D160 = new Audio("assets/audio/music/01062020_3_160_D.wav")
const cheese = new Audio("assets/audio/music/CutTheCheese_Theme_nofx.mp3")


function playResetButtonChime(){
  resetButtonChime.volume = 0.10
  resetButtonChime.play()
}

function playHiss(){
  hiss.volume = 0.75
  hiss.play()
}

function playGhostBreath(){
  ghostBreath.volume = 0.75
  ghostBreath.play()
}

function playLightning(){
  lightning.volume = 0.75
  lightning.play()
}

function playBoom(){
  boom.volume = 0.10
  boom.play()
}

function playBellDing(){
  bellDing.volume = 0.10
  bellDing.play()
}

function playRockPop1(){
  rockPop1.volume = 0.05
  rockPop1.play()
}

function playRockPop2(){
  rockPop2.volume = 0.05
  rockPop2.play()
}

function playMidEvil(){
  midEvil.volume = 0.75
  midEvil.play()
}
function playNuke(){
  nuke.volume = 0.75
  nuke.play()
}
function playFell(){
  fell.volume = 0.75
  fell.play()
}
function playD160(){
  d160.volume = 0.75
  d160.play()
}
function playCheese(){
  cheese.volume = 0.75
  cheese.play()
}

export {
  playResetButtonChime,
  playHiss,
  playGhostBreath,
  playLightning,
  playBoom,
  playBellDing,
  playRockPop1,
  playRockPop2,
  playMidEvil,
  playNuke,
  playFell,
  playD160,
  playCheese
};
