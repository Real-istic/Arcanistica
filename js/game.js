let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let gameStarted = false;
let isMuted = false;
let intervalIDs = [];
let music_gameOver = new Audio('./audio/music_game_over.mp3');
let music_game = new Audio('./audio/music_game.mp3');
let music_victory = new Audio('./audio/music_victory.mp3');
let music_endboss = new Audio('./audio/music_endboss.mp3');
// var joystick = new JoyStick({
// 	radius: 80,
// 	x: window.innerWidth / 2,
// 	y: window.innerHeight /2,
// 	inner_radius: 70
// });

function startGame() {
    let overlayScreen = document.getElementById('overlayScreen');
    overlayScreen.style.display = 'none';
    gameStarted = true;
    gameIntervals();
}

function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
}

function muteSound(div) {
    const originalSrc = div.getAttribute('data-original-src');

    if (div.src.endsWith('/off.png')) {
        isMuted = false;
        div.src = originalSrc;

    } else {
        div.setAttribute('data-original-src', div.src);
        isMuted = true;
        div.src = './assets/fantasy-platformer-game-ui/PNG/17Icons/brown/off.png';
    }
}

function gameIntervals() {
    let endboss = world.level.enemies[0];
    setInterval(() => {
        if (world.character.isFinallyDead) {
            gameOver = true;
            music_game.pause();
            music_endboss.pause();

            setTimeout(() => {
                if (!isMuted) music_gameOver.play();
                for (let i = 1; i < 9999; i++) window.clearInterval(i);
                document.getElementById('gameOverScreen').style.display = 'flex';
            }, 2100);

        } else if (endboss.isFinallyDead) {
            gameOver = true;
            music_game.pause();
            music_endboss.pause();

            setTimeout(() => {
                if (!isMuted) music_victory.play();
                for (let i = 1; i < 9999; i++) window.clearInterval(i);
                document.getElementById('gameOverScreen2').style.display = 'flex';
            }, 2100);
        }

        if (endboss.x - world.character.x <= 800 && !gameOver) {
            music_game.pause();
            music_gameOver.pause();
            if (!isMuted) music_endboss.play();
        }
    }, 500);

    // Loop music
    music_game.addEventListener('ended', function () {
        this.currentTime = 0;
        if (!isMuted) this.play();
    }, false);
    if (!isMuted) music_game.play();
}

function restartGame() {
    window.location.href = window.location.href;
}

window.addEventListener('keydown', (e) => {
    if (gameStarted) {

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

        } else if (e.key.toLowerCase() == 'arrowright') {
            keyboard.arrowRight = true;
            world.character.throwFireball();
        } else if (e.key.toLowerCase() == 'arrowleft') {
            keyboard.arrowLeft = true;
            world.character.castFirewall();
        }
    }
})

window.addEventListener('keyup', (e) => {
    if (gameStarted) {

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
    }
})