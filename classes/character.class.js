class Character extends MovableObject {
    x = 50;
    y = 60;
    width = 164
    height = 164
    speed = 13
    idleCounter = 0;
    IMAGES_WALKING = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
    ]

    IMAGES_JUMPING = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump7.png',
    ];

    IMAGES_IDLE = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle7.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle8.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle10.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle12.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        // 'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle14.png'
    ];

    world;
    walking_sound = new Audio('audio/steps_grass.mp3')


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_IDLE);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.x += this.speed;
                this.world.level.backgrounds[0].x += this.speed / 20;
                this.world.level.backgrounds[1].x += this.speed / 15;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -45) {
                this.x -= this.speed;
                this.world.level.backgrounds[0].x -= this.speed / 20;
                this.world.level.backgrounds[1].x -= this.speed / 15;

                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);


        setInterval(() => {
            if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                this.playAnimation(this.IMAGES_WALKING)
            } else {
                this.idleCounter++
                if (this.idleCounter > 50 && this.idleCounter <= 60) {
                    this.playAnimation(this.IMAGES_IDLE)
                    if (this.idleCounter >= 60) {
                        this.idleCounter = 0
                    }
                }
                // this.playAnimation(this.IMAGES_IDLE)
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


