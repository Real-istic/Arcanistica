class Character extends MovableObject {
    x = 50;
    y = 260;
    width = 164
    height = 164
    speed = 3
    IMAGES_WALKING = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
    ]
    world;
    walking_sound = new Audio('audio/steps_grass.mp3')


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)

        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause()
            if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.x += this.speed;
                this.world.level.backgrounds[0].x += 0.15
                this.world.level.backgrounds[1].x += 0.20
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -45) {
                this.x -= this.speed;
                this.world.level.backgrounds[0].x -= 0.15
                this.world.level.backgrounds[1].x -= 0.20

                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);
    }
}


/*

if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x) {
    this.x += this.speed;
    this.otherDirection = false;
    this.walking_sound.play();

    // Bewege jeden Hintergrund mit einer eigenen Geschwindigkeit
    for (let bg of this.world.level.backgrounds) {
        bg.speed = bg.baseSpeed * (1 + (this.speed / 10));
        bg.x -= bg.speed;
    }
}

if (this.world.keyboard.LEFT && this.x > -45) {
    this.x -= this.speed;
    this.otherDirection = true;
    this.walking_sound.play();

    // Bewege jeden Hintergrund mit einer eigenen Geschwindigkeit
    for (let bg of this.world.level.backgrounds) {
        bg.speed = bg.baseSpeed * (1 + (this.speed / 10));
        bg.x += bg.speed;
    }
}

// Setze die Kamera auf die neue Position
this.world.camera_x = -this.x + 100;

*/


