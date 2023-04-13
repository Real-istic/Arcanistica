let canvas;
let world;
let keyboard = new Keyboard();

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

    } else if (e.key.toLowerCase() == ' ' && !keyboard.SPACE && !world.character.isDead() && !world.character.isAboveGround() ) {
        keyboard.SPACE = true;
        // world.character.jumpAnimation();
 
    } else if (e.key.toLowerCase() == 'arrowright') {
        keyboard.arrowRight = true;
        world.character.throwFireball();
    } else if (e.key.toLowerCase() == 'arrowleft') {
        keyboard.arrowLeft = true;
        world.character.castFirewall();
    }
    // console.log('keyboard.SPACE: ', keyboard.SPACE)

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