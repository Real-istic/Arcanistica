class Character extends MovableObject {
    x = 50;
    width = 164
    height = 164
    speed = 13
    idleCounter = 0;
    world;
    walking_sound = new Audio('audio/steps_grass.mp3')
    idleTime = 0;

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
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
    ]

    IMAGES_IDLE_LONG = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle7.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle8.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
    ];

    IMAGES_DEAD = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death7.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death8.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death10.png',
    ]

    IMAGES_HURT = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt4.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x) {
                this.moveRight();
                // this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > -45) {
                this.moveLeft();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround()) {
                this.jump()
            }
            if (this.world.keyboard.arrowRight) {
                this.addObjectsToMap(this.throwableObjects);

            }
            this.world.camera_x = -this.x + 100;
            // console.log('this.speedY', this.speedY)
            // console.log('this.speedY', this.y)
        }, 1000 / 60);


        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD)
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT)
            } else if (this.isAboveGround()) {
                this.playAnimation(this.IMAGES_JUMPING)
            } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                this.playAnimation(this.IMAGES_WALKING)
            } else if (this.world.keyboard.arrowRight) {
                this.playAnimation(this.world.throwableObjects.IMAGES_FIREBALL)
            }
        }, 100);


        setInterval(() => {
            // console.log('idleTime ', this.idleTime)
            if ((this.isAboveGround()) || (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) || this.isDead() || (this.isHurt())) {
                this.idleTime = 0
            }
            if (this.idleTime >= 40) {
                this.playAnimation(this.IMAGES_IDLE_LONG)

            } else if (!(this.isAboveGround()) && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isDead() && !(this.isHurt())) {
                this.playAnimation(this.IMAGES_IDLE)
                this.idleTime++
            }
        }, 200);
    }
}