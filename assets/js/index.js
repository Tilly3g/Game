//Variables
var count;
var on = false;
var strict = false;
var compArray = [];
var playerArray = [];
var playerTurn;
var countDisplay = document.getElementById('display-text');
var level;
var win;
var lightUp;
var playerCorrect;

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
        playerTurn = false;
        win = false;
        level = 1;
        countDisplay.innerText = 1;
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
    playerCorrect = true;
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
    count = 0;
}

//Player button presses
blueButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(1);
        blueButton.style.background = '#223cff';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

redButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(2);
        redButton.style.background = '#ff3131';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

greenButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(3);
        greenButton.style.background = '#0bd224';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

yellowButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(4);
        yellowButton.style.background = '#fdff50';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

//Checking to see if player is correct/incorrect/won
function levelCheck() {
    console.log(playerArray)
    if (playerArray[playerArray.length - 1] !== compArray[playerArray.length - 1]) {
        playerCorrect = false;
        countDisplay.innerText = '!';
        setTimeout(incorrect, 500);
    }
    if (playerArray.length === compArray.length && playerCorrect) {
        win = true;
        //playerWon();
    }
    if (playerArray.length === level && playerCorrect) {
        level++;
        countDisplay.innerText = level;
        playerArray = [];
        playerTurn = false;
        playGame();
    }
}

function incorrect() {
    if (!strict) {
        playerArray = [];
        playerTurn = false;
        countDisplay.innerText = level;
        playGame()
    }
}