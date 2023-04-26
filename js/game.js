let canvas;
let world;
let keyboard = new Keyboard();
let gameOver = false;
let gameStarted = false;
let isMuted = false;
let intervalIDs = [];
let isFullscreen = false;
let music_gameOver = new Audio('./audio/music_game_over.mp3');
let music_game = new Audio('./audio/music_game.mp3');
let music_victory = new Audio('./audio/music_victory.mp3');
let music_endboss = new Audio('./audio/music_endboss.mp3');



/**
 * sets the overlayscreen to none and starts the game
 */
function startGame() {
    let overlayScreen = document.getElementById('overlayScreen');
    overlayScreen.style.display = 'none';
    gameStarted = true;
    gameIntervals();
}

/**
 * initializes the canvas and the world
 */
function init() {
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    isMuted = JSON.parse(localStorage.getItem("isMuted"));
    let muteButton = document.getElementById('muteButton');
    muteButton.src = isMuted == false ? './assets/fantasy-platformer-game-ui/PNG/17Icons/yellow/off_yellow.png' : './assets/fantasy-platformer-game-ui/PNG/17Icons/brown/off.png';
}

/**
 * mutes or unmutes the sound
 */
function muteSound() {
    let muteButton = document.getElementById('muteButton');

    if (isMuted == true) {
        isMuted = false;
        localStorage.setItem("isMuted", JSON.stringify(isMuted));
        muteButton.src = './assets/fantasy-platformer-game-ui/PNG/17Icons/yellow/off_yellow.png';

    } else {
        isMuted = true;
        localStorage.setItem("isMuted", JSON.stringify(isMuted));
        muteButton.src = './assets/fantasy-platformer-game-ui/PNG/17Icons/brown/off.png';
    }
}

/**
 * checks the win/loss conditions and plays the specific music
 * 
 */
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
    }, 200);

    // Loop music
    music_game.addEventListener('ended', function () {
        this.currentTime = 0;
        if (!isMuted) this.play();
    }, false);
    if (!isMuted) music_game.play();
}

/**
 * restarts the game
 */
function restartGame() {
    window.location.href = window.location.href;
}

/**
 * toggles the canvassize (frameDiv) to fullscreen or windowed
 */
function toggleFullscreen() {
    var elem = document.getElementById("frameDiv");
  
    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
      }
      isFullscreen = true;
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
      }
      isFullscreen = false;
    }
  }

/**
 * Keyboard controls (keydown)
 */
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

/**
 * Keyboard controls (keyup)
 */
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

