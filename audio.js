const resetButtonChime = new Audio("assets/audio/sfx/EarthyChimes.wav")
const hiss = new Audio("assets/audio/sfx/random/alligator hiss.wav")
const ghostBreath = new Audio("assets/audio/sfx/random/Ahhhh Breath.wav")
const lightning = new Audio("assets/audio/sfx/random/lightning strike 01.wav")
const boom = new Audio("assets/audio/sfx/low end boom sweetener 01.wav")
const bellDing = new Audio("assets/audio/sfx/bell01.wav")
const rockPop1 = new Audio("assets/audio/sfx/Tongue Pop H.wav")
const rockPop2 = new Audio("assets/audio/sfx/Tongue Pop L.wav")

function playResetButtonChime(){
  resetButtonChime.volume = 0.75
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
  boom.volume = 0.75
  boom.play()
}

function playBellDing(){
  bellDing.volume = 0.75
  bellDing.play()
}

function playRockPop1(){
  rockPop1.volume = 0.75
  rockPop1.play()
}

function playRockPop2(){
  rockPop2.volume = 0.75
  rockPop2.play()
}