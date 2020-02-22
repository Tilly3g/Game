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
    console.log(compArray)
})