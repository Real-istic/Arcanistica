let canvas;
let world;
let keyboard = new Keyboard();
let intervalIds = [];

function setStoppableInterval(callback, time) {
    let id = setInterval(callback, time);
    intervalIds.push(id);
}

// setStoppableInterval(movementAnimation, (1000 / 60));

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
}

window.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() == 'a') {
        keyboard.LEFT = true;

    } else if (e.key.toLowerCase() == 'd') {
        keyboard.RIGHT = true;

    } else if (e.key.toLowerCase() == 'w') {
        keyboard.UP = true;

    } else if (e.key.toLowerCase() == 's') {
        keyboard.DOWN = true;

    } else if (e.key.toLowerCase() == ' ') {
        keyboard.SPACE = true;

    } else if (e.key.toLowerCase() == 'arrowright') {
        keyboard.arrowRight = true;
        world.character.throwFireball()
    }
    // console.log('keyboard.arrowRight ', keyboard.arrowRight)

    // console.log(e)
})

window.addEventListener('keyup', (e) => {
    if (e.key.toLowerCase() == 'a') {
        keyboard.LEFT = false;

    } else if (e.key.toLowerCase() == 'd') {
        keyboard.RIGHT = false;

    } else if (e.key.toLowerCase() == 'w') {
        keyboard.UP = false;

    } else if (e.key.toLowerCase() == 's') {
        keyboard.DOWN = false;

    } else if (e.key.toLowerCase() == ' ') {
        keyboard.SPACE = false;

    } else if (e.key.toLowerCase() == 'arrowright') {
        keyboard.arrowRight = false;
    }
    // console.log('keyboard.arrowRight ', keyboard.arrowRight)

    // console.log(e)
})