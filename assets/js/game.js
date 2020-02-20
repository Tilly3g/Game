//variables
var on = false;
var strict = false;
var sound = true
var playLights;
var compOrder = [];
var compTurn
var playerOrder = [];
var playerTurn;
var level;
var playerCorrect;
var win = false
var lightInterval;

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
onOff.addEventListener('click', function() {
    if (!on) {
        on = true;
        playerTurn = false;
        document.getElementById("button-on").style.visibility = 'visible';
        document.getElementById("button-off").style.visibility = 'hidden';
        countDisplay.innerHTML = ("--");
    } else if (on) {
        on = false;
        document.getElementById("button-on").style.visibility = 'hidden';
        document.getElementById("button-off").style.visibility = 'visible';
        countDisplay.innerHTML = ("");
        noLights();
        clearInterval(lightInterval);
    }
});

//strict button
strictButton.addEventListener('click', function() {
    if (!strict) {
        strict = true;
        strictButton.style.background = '#0d9e1f';
    } else if (strict) {
        strict = false;
        strictButton.style.background = '#e7ea09';
    }
});

//start button
startButton.addEventListener('click', function() {
    if (on) {
        win = false
        run();
    }
})

//Game play functions - computer
function run() {
    level = 1;
    countDisplay.innerHTML = 1;
    compOrder = [];
    playerOrder = [];
    playLights = 0;
    lightInterval = 0;
    playerCorrect = true;
    for (var i = 0; i < 20; i++) {
        compOrder.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    lightInterval = setInterval(lightUp, 1000);
}

function lightUp() {
    if (playLights == level) {
        compTurn = false;
        noLights();
        playerTurn = true;
    } if (compTurn) {
        playerTurn = false;
        noLights();
        setTimeout(() => {
            if (compOrder[playLights] == 1) { 
                blue();
            }
            if (compOrder[playLights] == 2) {
                red();
            }
            if (compOrder[playLights] == 3) {
                green();
            }
            if (compOrder[playLights] == 4) {
                yellow();
            }
            playLights++;
        }, 250);
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

function noLights() {
    blueButton.style.background = '#2136d2';
    redButton.style.background = '#e60303';
    greenButton.style.background = '#0d9e1f';
    yellowButton.style.background = '#e7ea09';
}

//Game functions - player
blueButton.addEventListener('click', function() {
    if (playerTurn) {
        blue();
        playerOrder.push(1);
        checkLevel();
        setTimeout(noLights(), 1000);
    }
})

redButton.addEventListener('click', function() {
    if (playerTurn) {
        playerOrder.push(2);
        red();
        checkLevel();
        setTimeout(noLights(), 1000);
    }
})

greenButton.addEventListener('click', function() {
    if (playerTurn) {
        playerOrder.push(3);
        green();
        checkLevel();
        setTimeout(noLights(), 1000);
    }
})

yellowButton.addEventListener('click', function() {
    if (playerTurn) {
        playerOrder.push(4);
        yellow();
        checkLevel();
        setTimeout(noLights(), 1000);
    }
})

function checkLevel() {
    if (playerOrder[playerOrder.length - 1] !== compOrder[compOrder.length -1]) {
        playerCorrect = false;
    } if (playerOrder.length == compOrder.length && playerCorrect) {
        win = true;
        //playerWon();
    }

    if (playerCorrect && !win) {
        level++
        countDisplay.innerHTML = level;
        playerOrder = [];
        playLights = 0;
        compTurn = true;
        lightInterval = setInterval(lightUp, 1000);
    }
}