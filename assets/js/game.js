//variables
let on = false;
let strict = false;
let sound = true
let playLights;
let compOrder = [];
let compTurn
let playerOrder = [];
let level;
let playerCorrect;
let win;
let lightInterval;

//constants from html
const countDisplay = document.getElementById("display-text");
const onOff = document.getElementById("on-off-switch");
const strictButton = document.getElementById("strict-button");
const startButton = document.getElementById("start-button");
const blueButton = document.getElementById("button-blue")
const redButton = document.getElementById("button-red")
const greenButton = document.getElementById("button-green")
const yellowButton = document.getElementById("button-yellow")

//controls - game on/off
onOff.addEventListener('click', (event) => {
    if (on == false) {
        on = true;
        $("#button-on").css("visibility", "visible");
        $("#button-off").css("visibility", "hidden");
        countDisplay.innerHTML = ("--");
    } else if (on = true) {
        on = false;
        $("#button-on").css("visibility", "hidden");
        $("#button-off").css("visibility", "visible");
        countDisplay.innerHTML = ("");
        //noLights();
        clearInterval();
    }
});

//strict button
strictButton.addEventListener('click', function() {
    if (strict == false) {
        strict = true;
        strictButton.style.background = '#0d9e1f';
    } else if (strict = true) {
        strict = false;
        strictButton.style.background = '#e7ea09';
    }
});

//start button
startButton.addEventListener('click', function() {
    if (on == true || win == true) {
        run();
    }
})

//Game play functionality
function run() {
    level = 1;
    countDisplay.innerHTML = 1;
    compOrder = [];
    playerOrder = [];
    playLights = 0;
    playerCorrect = true;
    for (var i = 0; i < 20; i++) {
        compOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    console.log(compOrder)
    lightInterval = setInterval(lightUp, 1000)
}

function lightUp() {

    if (compTurn == true) {
        on = false;
        //noLights();
        setTimeout(function() {
            if (compOrder[playLights] == 1) blue();
            if (compOrder[playLights] == 2) red();
            if (compOrder[playLights] == 3) green();
            if (compOrder[playLights] == 4) yellow();
            playLights++;
        }, 500);
    }

    if (playLights == level) {
        on = true;
        compTurn = false;
        //noLights();
    }
}

function blue() {
    blueButton.style.background = '#223cff';
}

function red() {
    redButton.style.background = '#ff3131';
}

function green() {
    greenButton.style.background = '#0bd224';
}

function yellow() {
    yellowButton.style.background = '#fdff50';
}