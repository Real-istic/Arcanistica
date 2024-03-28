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
 * initializes the canvas, world and ui (also loads the localstorage to check if the game is muted)
 */
async function init() {
    this.checkScreenSize();
    canvas = document.getElementById('canvas');
    world = new World(canvas, keyboard);
    buildUI();
    isMuted = await JSON.parse(localStorage.getItem("isMuted")) || false;
    let muteButton = document.getElementById('muteButton');
    muteButton.src = isMuted == false ? './assets/fantasy-platformer-game-ui/PNG/17Icons/yellow/off_yellow.png' : './assets/fantasy-platformer-game-ui/PNG/17Icons/brown/off.png';
    await pushContentToLevel()
}

/**
 * prebuilds the userinterface
 */
function buildUI() {
    world.ui.statusbars.push(
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_bg.png', 90, 30, 100, 20),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/stamina-energy-magic_bar_bg.png', 90, 60, 100, 20),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full.png', 90, 30, 100, 20),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/magic_full_bar.png', 90, 60, 100, 20),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_border.png', 90, 30, 100, 20),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_bar_border.png', 90, 60, 100, 20)
    );
    world.ui.icons.push(
        new Ui('./assets/fantasy-platformer-game-ui/PNG/15Character/heart.png', 180, 28, 25, 25),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/15Character/magic.png', 180, 57, 25, 25)
    );
    world.ui.frames.push(
        new Ui('./assets/fantasy-character-avatar-icons-pixel-art/PNG/Background/con8.png', 22, 18, 60, 60),
        new Ui('./assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/square_border_big_full_empty.png', 15, 13, 70, 70)
    );
}

/**
 * sets the overlayscreen to none and starts the game after the intervals are initialized
 */
async function startGame() {
    let overlayScreen = document.getElementById('overlayScreen');
    overlayScreen.style.display = 'none';
    gameStarted = true;
    gameIntervals();
    if (!isFullscreen && (window.innerWidth < 930 && window.innerWidth > window.innerHeight)) {
        let elem = document.getElementById("frameDiv");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.webkitRequestFullscreen) { /* Safari */
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) { /* IE11 */
            elem.msRequestFullscreen();
        }
        isFullscreen = true;
    }
}

/**
 * pushes the content to the level
 */
async function pushContentToLevel() {
    pushEnemiesToLevel();
    pushCloudsToLevel();
    pushBackgroundsToLevel();
}

/**
 * pushes the enemies to the level
 */
function pushEnemiesToLevel() {
    level1.enemies.push(
        new Endboss(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Medusa(),
        new Medusa()
    );
}

/**
 * pushes the clouds to the level
 */
function pushCloudsToLevel() {
    level1.clouds.push(
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 50),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 2),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 4),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 6),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 8),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 10),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 12),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 14)
    );
}

/**
 * pushes the backgrounds to the level
 */
function pushBackgroundsToLevel() {
    level1.backgrounds.push(
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background2.png', -230),
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background1.png', -400),
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background3.png', -100),
    )
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
            characterIsDead();

        } else if (endboss?.isFinallyDead) {
            endbossIsDead();
        }

        if (endboss?.x - world.character.x <= 800 && !gameOver) {
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
 * handles the character death-event
 */
function characterIsDead() {
    gameOver = true;
    music_game.pause();
    music_endboss.pause();

    setTimeout(() => {
        if (!isMuted) music_gameOver.play();
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        document.getElementById('gameOverScreen').style.display = 'flex';
    }, 2100);
}

/**
 * handles the endboss death-event
 * 
 * @param {*} endboss // endboss object
 */
function endbossIsDead() {
    gameOver = true;
    music_game.pause();
    music_endboss.pause();

    setTimeout(() => {
        if (!isMuted) music_victory.play();
        for (let i = 1; i < 9999; i++) window.clearInterval(i);
        document.getElementById('gameOverScreen2').style.display = 'flex';
    }, 2100);
}

/**
 * restarts the game
 */
function restartGame() {
    window.location.href = window.location.href;
}

/**
 * calls the checkScreenSize function on window resize
 */
window.addEventListener('resize', function () {
    this.checkScreenSize()
});

/**
 * checks if the screen width is smaller than 930px and if the screen is in portrait mode also shows the rotate device screen
 */
function checkScreenSize() {
    let rotateScreen = document.getElementById('rotateDevice');

    if (window.innerWidth < 930 && window.innerWidth < window.innerHeight) {
        rotateScreen.style.display = 'flex';
    } else {
        rotateScreen.style.display = 'none';
    }
}

/**
 * toggles the canvassize (frameDiv) to fullscreen or windowed
 */
function toggleFullscreen() {
    let elem = document.getElementById("frameDiv");

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

