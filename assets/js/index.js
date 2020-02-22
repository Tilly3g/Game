//Variables
var start;
var on = false;
var strict = false;
var compArray = [];
var playerArray = [];
var compTurn;
var playerTurn;
var countDisplay = document.getElementById('display-text');
var level;
var win;
var lightUp;

//Buttons
var onToggle = document.getElementById('on-off-switch');
var startButton =  document.getElementById('start-button');
var strictButton = document.getElementById('strict-button');
var blueButton = document.getElementById('button-blue');
var redButton = document.getElementById('button-red');
var greenButton = document.getElementById('button-green');
var yellowButton = document.getElementById('button-yellow');

//On toggle
onToggle.addEventListener('click', function () {
    if (!on) {
        on = true;
        document.getElementById('button-on').style.visibility = 'visible';
        document.getElementById('button-off').style.visibility = 'hidden';
        countDisplay.innerText = '--';
    } else if (on) {
        on = false;
        document.getElementById('button-on').style.visibility = 'hidden';
        document.getElementById('button-off').style.visibility = 'visible';
        countDisplay.innerText = '';
        clearInterval(lightUp)
    }
})

//Strict button
strictButton.addEventListener('click', function() {
    if (!strict) {
        strict = true;
        strictButton.style.background = '#0d9e1f';
    } else if (strict) {
        strict = false;
        strictButton.style.background = '#e7ea09';
    }
})

//Start button
startButton.addEventListener('click', function() {
    if (on) {
        compArray = [];
        playerArray = [];
        compTurn = true;
        playerTurn = false;
        win = false;
        level = 1;
        countDisplay.innerText = level;
        count = 0;
        for (i = 0; i < 20; i++) {
            compArray.push(Math.floor(Math.random() * 4) + 1)
        }
    console.log(compArray);
    playGame();
    }
})

//Game play function
function playGame() {
    lightUp = setInterval(function() {
        if (compArray[count] === 1) {
            blueButton.style.background = '#223cff';
        } if (compArray[count] === 2) {
            redButton.style.background = '#ff3131';
        } if (compArray[count]=== 3) {
            greenButton.style.background = '#0bd224';
        } if (compArray[count] === 4) {
            yellowButton.style.background = '#fdff50';
        } 
        count++;
        setTimeout(resetLights, 1000)
        if (count === level) {
            player();
        }
    }, 1200)
}

//Clear flashed light
function resetLights() {
    blueButton.style.background = '#2136d2';
    redButton.style.background =  '#e60303';
    greenButton.style.background = '#0d9e1f';
    yellowButton.style.background = '#e7ea09';
}

function player() {
    clearInterval(lightUp);
    compTurn = false;
    playerTurn =  true;
}

//Player button presses
blueButton.addEventListener('click', function() {
    if (playerTurn && on) {
        blueButton.style.background = '#223cff';
        playerArray.push[1];
        setTimeout(resetLights, 500);
        //levelCheck();
    }
});

redButton.addEventListener('click', function() {
    if (playerTurn && on) {
        redButton.style.background = '#ff3131';
        playerArray.push[2];
        setTimeout(resetLights, 500);
        //levelCheck();
    }
});

greenButton.addEventListener('click', function() {
    if (playerTurn && on) {
        greenButton.style.background = '#0bd224';
        playerArray.push[3];
        setTimeout(resetLights, 500);
        //levelCheck();
    }
});

yellowButton.addEventListener('click', function() {
    if (playerTurn && on) {
        yellowButton.style.background = '#fdff50';
        playerArray.push[4];
        setTimeout(resetLights, 500);
        //levelCheck();
    }
});