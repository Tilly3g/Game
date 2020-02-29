# Simon Game

This is a website where a user can go to play an online version of the Simon game. It has all functionalities including
a power button and a strict mode. 

Users can ply this game any time and anywhere as it is mobile freindly. It is a fun way to pass the time and well as testing
the users memory.

## UX

The Simon game is a memory game where the computer will play a random sequence of light flashes, each with their own sound,
and then the user has to repeat them in the correct order. The game is placed in the middle of the screen and presented 
similarly to how the original Simon game looks making it easy to identify and know what to do.

The buttons are all clearly labled with what they do so it is easy for a new user to work out what will happen with each button
they press. There is an on/off toggle, a start button and a strict button. The other buttons won't work if the on/off toggle is
switched to the 'off' position and when you first go to the game it will be off to begin with. Simply clicking on this toggle 
will move it to the 'on' position and the level display will go from being blank to showing '--', making it obvious to the user
that the game is switched on. All they then need to do is press the 'Start' button and the game will begin.

There is also a strict button which will light up green when it is enabled, making it easy for the user to know if strict mode 
is on or off. When strict mode is enabled, if the user presses the wrong coloured button and the sequence they have clicked
doesn't match the computer sequence then the game will start again and go back to level one and a new random sequence will be 
generated. When strict mode is disabled, if the user gets the sequence wrong then the level will remain the same and the computer 
will play the same sequence again to remind the user and they can try again at the same stage after that.

User stories:

1. I have turned the game on and pressed start. I am then presented with a random coloured button flashing and a beep.
I have to click the same button.

- The game will then check if the user is correct and if they are the level showing in the display in the center of the game will
increase by one and the game will continue.

2. I am next presented with a random sequence of coloured buttons flashing, each button has a different tone. The sequence I am 
shown increases in length by one every time the level increases. 

- The game will check the sequence the user clicks the buttons in and if it matches the computer sequence the level will increase. 
If it doesn't match then the user is shown they are wrong with an '!' appearing in the display. The level will remain the same and
the same sequence will be shown to the user again so they can try again.

3. I enable strict mode on the game and am again presented with a random sequence of flashes and the corresponding beeps when 
starting the game. I have to click the same sequence.

- The game will check that the sequence the user clicks matches the computer sequence and if strict mode is enabled. If the user 
is correct then the level will increase by one and the game will continue. If the user is incorrect then the game will show an
'!' in the display and go back to level one. The computer will generate a new random sequence so it is different from the one 
the user got incorrect. 

4. I have reached level 20 and have correctly copied the random sequence of flashes I was presented with.

- The game will check that the users sequence matches the computer sequence and if it is level 20 then the display will show 
'WIN' and all the buttons will light up to show that the user has successfully completed the game. The user can then turn the game
off which will clear the lights and display, or press start, which will clear the lights, change the display to '1' and start the 
game from the beginning.

I created an initial wireframe for the project using [Lucid Chart](https://www.lucidchart.com/pages/home) which is linked [here](assets/wire-frame/bakery_website.pdf)

## Features

- On/Off toggle - allows user to switch the game on or off. When the game is switched off no other buttons can be pressed and the
display is empty.
- Start button - allows users to start the game at their convenience when the game is switched on. Pressing it during game play will also restart the game if
desired.
- Strict button - allows user to enable or disable strict whenever they desire when the game is switched on.
- Four coloured game buttons - these will flash to show the sequence they need to be pressed in. The user can only click these 
when the computers turn is over and it is their turn, clicking them at any other time will have no effect.

## Technologies Used



- [Google Fonts](https://fonts.google.com)
    - To allow the use of a wider range of fonts.

- HTML
    - For the main elements

- CSS
    - To style the HTML