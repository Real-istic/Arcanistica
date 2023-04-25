// Creates the JoyStick object into the DIV 'joyDiv'
var joy = new JoyStick('joyDiv');

const joystick = document.getElementById("joystick");
joystick.addEventListener('touchmove', (e) => {
    console.log('touchmove', joy.GetDir());
    const direction = joy.GetDir();
    
    if (direction === 'E' || direction === 'NE' || direction === 'SE') {
        keyboard.RIGHT = true;
        keyboard.LEFT = false;
    } 
    if (direction === 'W' || direction === 'NW' || direction === 'SW') {
        keyboard.LEFT = true;
        keyboard.RIGHT = false;
    } 
    if (direction === 'N') {
        keyboard.UP = true;
        keyboard.SPACE = true;
        keyboard.DOWN = false;
        keyboard.LEFT = false;
        keyboard.RIGHT = false;
        
    } else if (direction === 'NW' || direction === 'NE') {
        keyboard.UP = true;
        keyboard.SPACE = true;
        keyboard.DOWN = false;
    }
    if (direction === 'S' || direction === 'SW' || direction === 'SE') {
        keyboard.DOWN = true;
        keyboard.SPACE = false;
        keyboard.UP = false;
    }
});

joystick.addEventListener('touchend', (e) => {
    keyboard.LEFT = false;
    keyboard.RIGHT = false;
    keyboard.UP = false;
    keyboard.DOWN = false;
    keyboard.SPACE = false;
});