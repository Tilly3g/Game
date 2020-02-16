// variables
let on = false;
let strict = false;
let play;
let compOrder = [];
let compTurn
let playerOrder = [];
let level;
let arraysMatch;
let win;

// constants
const countDisplay = document.querySelector("#display-text");
const onOff = document.querySelector("#on-off-switch");
const strictButton = document.querySelector("#strict-button")

// controls - game on/off
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
        noColour();
        clearCount();
        }
});

// strict button
strictButton.addEventListener('click', function() {
    if (strict == false) {
        strict = true;
        strictButton.style.background = '#0d9e1f';
    } else if (strict = true) {
        strict = false;
        strictButton.style.background = '#e7ea09';
    }
});

start button
$("#start-button").addEventListener('click', (event) => {
    if (on || win) {
        run();
    }
})