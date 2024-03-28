// Creates the JoyStick object into the DIV 'joyDiv' and handles its events
let joy = new JoyStick('joyDiv');

const joystick = document.getElementById("joystick");
joystick.addEventListener('touchmove', (e) => {
    const direction = joy.GetDir();
    console.log(direction)

    if (direction === 'E' || direction === 'NE' || direction === 'SE') {
        keyboard.RIGHT = true;
        keyboard.LEFT = false;
    } else if (direction === 'W' || direction === 'NW' || direction === 'SW') {
        keyboard.LEFT = true;
        keyboard.RIGHT = false;
    }
    if (direction === 'NW' || direction === 'N' || direction === 'NE') {
        keyboard.SPACE = true;
    } else if (direction === 'S' || direction === 'SW' || direction === 'SE' || direction === 'E' || direction === 'W') {
        keyboard.SPACE = false;
    }
    if (direction === 'N') {
        keyboard.SPACE = true;
        keyboard.RIGHT = false;
        keyboard.LEFT = false;
    }
});

joystick.addEventListener('touchend', (e) => {
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
    keyboard.UP = false;
    keyboard.DOWN = false;
    keyboard.SPACE = false;
});