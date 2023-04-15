let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let music_gameOver = new Audio('audio/music_game_over.mp3');
let music_game = new Audio('audio/music_game.mp3');
let music_victory = new Audio('audio/music_victory.mp3');
let music_endboss = new Audio('audio/music_endboss.mp3');

function showStartScreen() {
    let gameWindow = document.getElementById('frameDiv');
    gameWindow.innerHTML = /*html*/ `
        <img src="assets/FancyBackground2.png" alt="">
    `;
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    console.log('My Character is', world.character);
    gameIntervals();
    setTimeout(() => {
        music_game.play();

    }, 1000);
    // showStartScreen()
}

function gameIntervals() {
    let endboss = world.level.enemies[0];
    setInterval(() => {
        if (world.character.isFinallyDead) {
            gameOver = true;
            music_game.pause();
            music_endboss.pause();

            setTimeout(() => {
                music_gameOver.play();
                for (let i = 1; i < 9999; i++) window.clearInterval(i);
                music_gameOver.addEventListener('ended', function () {
                    this.currentTime = 0;
                    this.play();
                }, false);
                music_gameOver.play();
            }, 1100);

        } else if (endboss.isFinallyDead) {
            gameOver = true;
            music_game.pause();
            music_endboss.pause();
            setTimeout(() => {
                music_victory.play();
                for (let i = 1; i < 9999; i++) window.clearInterval(i);
            }, 1100);
        }

        if (endboss.x - world.character.x <= 800 && !gameOver) {
            music_game.pause();
            music_gameOver.pause();
            music_endboss.play();
        }
    }, 500);

    // Loop music
    music_game.addEventListener('ended', function () {
        this.currentTime = 0;
        this.play();
    }, false);
    music_game.play();


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

    } else if (e.key.toLowerCase() == ' ' && !keyboard.SPACE && !world.character.isDead() && !world.character.isAboveGround()) {
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