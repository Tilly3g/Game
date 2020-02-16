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

// controls - game on/off
$("#on-off-switch").addEventListener('click', (event) => {
    if ($("#button-on").css("visibility", "hidden")) {
        on = true;
        $("#button-on").css("visibility", "visible");
        $("#button-off").css("visibility", "hidden");
        $("display-text").html("--");

        } else if ($("#button-on").css("visibility", "visible")) {
          on = false;
        $("#button-on").css("visibility", "hidden");
        $("#button-off").css("visibility", "visible");
        $("display-text").html("");
        noColour();
        clearCount();
        }
});

// strict button
$("#strict-button").addEventListener('click', (event) => {
    if ($("#strict-button").css("background", "#e7ea09")) {
        strict = true;
        $("#strict-button").css("background", "#0d9e1f")
    } else {
        strict = false;
        $("#strict-button").css("background", "#e7ea09")
    }
});

// start button
$("#start-button").addEventListener('click', (event) => {
    if (on || win) {
        run();
    }
})