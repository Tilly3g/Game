//Variables
var on = false;
var strict = false;
var compArray = [];
var playerArray = [];
var playerTurn = false;
var countDisplay = document.getElementById('display-text');
var level;
var count;
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

//Sounds
var blueBeep = document.getElementById('blueBeep');
var redBeep = document.getElementById('redBeep');
var greenBeep = document.getElementById('greenBeep');
var yellowBeep = document.getElementById('yellowBeep');

//On toggle
onToggle.addEventListener('click', function () {
    if (!on) {
        on = true;
        document.getElementById('button-on').style.visibility = 'visible';
        document.getElementById('button-off').style.visibility = 'hidden';
        countDisplay.innerText = '--';
    } else if (on) {
        on = false;
        strict = false;
        strictButton.style.background = '#e7ea09';
        document.getElementById('button-on').style.visibility = 'hidden';
        document.getElementById('button-off').style.visibility = 'visible';
        countDisplay.innerText = '';
        clearInterval(lightUp)
        resetLights();
    }
})

//Strict button
strictButton.addEventListener('click', function() {
    if (!strict && on) {
        strict = true;
        strictButton.style.background = '#0bd224';
    } else if (strict) {
        strict = false;
        strictButton.style.background = '#d1d416';
    }
})

//Start button
startButton.addEventListener('click', function() {
    if (on) {
        resetLights();
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

//Game play function. Count is introduced as a variable that starts at 0 and is used to loop through the array that has been 
//randomly generated, telling the game which light to flash depending on what the number is at that part of the array. 
//Count will increase with each interval until it is the same as the level the player is on as this is how far through the random
//array the player is. It is used to count the light flashes and make sure they match the number in the array for if it is the 
//first, second, third, and so on, flash in the sequence.
function playGame() {
    playerCorrect = true;
    playerArray = [];
    playerTurn = false;
    lightUp = setInterval(function() {
        if (compArray[count] === 1) {
            blueButton.style.background = '#223cff';
            blueBeep.play();
        } if (compArray[count] === 2) {
            redButton.style.background = '#ff3131';
            redBeep.play();
        } if (compArray[count]=== 3) {
            greenButton.style.background = '#0bd224';
            greenBeep.play();
        } if (compArray[count] === 4) {
            yellowButton.style.background = '#fdff50';
            yellowBeep.play();
        } 
        count++;
        setTimeout(resetLights, 1000)
        if (count === level) {
            player();
        }
    }, 1200)
}

//Clear flashed lights back to original colours
function resetLights() {
    blueButton.style.background = '#2136d2';
    redButton.style.background =  '#e60303';
    greenButton.style.background = '#0d9e1f';
    yellowButton.style.background = '#d1d416';
}

//When count reaches the same as the level number, this function stops the interval from continuing to loop through the array
function player() {
    clearInterval(lightUp);
    playerTurn =  true;
    count = 0;
}

//Player button presses
blueButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(1);
        blueBeep.play();
        blueButton.style.background = '#223cff';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

redButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(2);
        redBeep.play();
        redButton.style.background = '#ff3131';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

greenButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(3);
        greenBeep.play();
        greenButton.style.background = '#0bd224';
        setTimeout(resetLights, 500);
        levelCheck();
    }
});

yellowButton.addEventListener('click', function() {
    if (playerTurn && on) {
        playerArray.push(4);
        yellowBeep.play();
        yellowButton.style.background = '#fdff50';
        setTimeout(resetLights, 200);
        levelCheck();
    }
});

//Checking to see if player is correct/incorrect/won and also what to do if strict mode is on or off
function levelCheck() {
    console.log(playerArray)
    if (playerArray[playerArray.length - 1] !== compArray[playerArray.length - 1]) {
        playerCorrect = false;
        playerTurn = false;
        countDisplay.innerText = '!';
        setTimeout(incorrect, 800);
    }
    if (playerArray.length === compArray.length && playerCorrect) {
        win = true;
        setTimeout(playerWon, 500);
    }
    else if (playerArray.length === level && playerCorrect) {
        level++;
        countDisplay.innerText = level;
        playGame();
    }
}

function incorrect() {
    playerArray = [];
    if (strict) {
        compArray = [];
        for (i = 0; i < 20; i++) {
            compArray.push(Math.floor(Math.random() * 4) + 1)
        }
        level = 1;
        countDisplay.innerText = 1;
        playGame();
    } else {
        playGame();
        countDisplay.innerText = level;
    }
}

function playerWon() {
    countDisplay.innerText = 'WIN';
    blueButton.style.background = '#223cff';
    redButton.style.background = '#ff3131';
    greenButton.style.background = '#0bd224';
    yellowButton.style.background = '#fdff50';
    playerTurn = false;
    playerCorrect = false;
}