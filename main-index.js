
let result = document.getElementById("home-score")
let score = 0

function plusOne() {
    score = score + 1
    result.textContent = score
       
}

function plusTwo() {
    score = score + 2
    result.textContent = score
       
}

function plusThree() {
    score = score + 3
    result.textContent = score
}

let gResult = document.getElementById("guest-score")
let gScore = 0

function gPlusOne() {
    gScore = gScore + 1
    gResult.textContent = gScore
       
}

function gPlusTwo() {
    gScore = gScore + 2
    gResult.textContent = gScore
       
}

function gPlusThree() {
    gScore = gScore + 3
    gResult.textContent = gScore
       
}

function newGame() {
    score = 0
    gScore = 0
    result.textContent = score
    gResult.textContent = gScore
}