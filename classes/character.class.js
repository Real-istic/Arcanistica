class Character extends MovableObject {
    x = 50;
    width = 164;
    height = 164;
    speed = 14;
    idleCounter = 0;
    world;
    walking_sound = new Audio('audio/steps_grass.mp3')
    idleTime = 0;
    fireballCooldown = 0;
    resetFireballCooldown = 700;
    fireballStatus = false;
    fireballMPcost = 30;
    offset = {
        top: 20,
        bottom: 90,
        left: 230,
        right: 35
    }
    HP = 100;
    MP = 100;
    manaregen = 0.25;

    IMAGES_WALK = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
    ]

    IMAGES_JUMP = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump7.png',
    ];

    IMAGES_JUMP2 = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump7.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump8.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump9.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump10.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump11.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/High_Jump/high_jump12.png',

    ]

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

    IMAGES_ATTACK = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack6.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack7.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_JUMP2);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

            this.setMPbarWidth(this.MP)

            if (this.MP < 100 && !this.isFinallyDead) {
                this.MP += this.manaregen;
            }

            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock)  {
                this.moveRight();
                // this.walking_sound.play();
            }

            if (this.world.keyboard.LEFT && this.x > -45 && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock) {
                this.moveLeft();
            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() && !characterCollidesWithRock) {
                this.jump();
            }
            this.world.camera_x = -this.x + 200;
            // console.log('this.speedY', this.speedY)
            // console.log('this.speedY', this.y)
        }, 1000 / 60);

        setInterval(() => {
            this.fireballCooldown -= 100;
            if (this.fireballCooldown <= 0) {
                this.fireballCooldown = 0;
            }

            // console.log('fireballCooldown', this.fireballCooldown)

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEAD)

            } else if (this.isHurt() && !this.fireballStatus) {
                this.playAnimation(this.IMAGES_HURT)

            } else if ((this.world.keyboard.SPACE && !this.fireballStatus && !this.isFinallyDead) || this.isAboveGround() && !this.fireballStatus) {
                this.playAnimation(this.IMAGES_JUMP)

            } else if (((this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) && !this.isAboveGround() && !this.fireballStatus && !this.isFinallyDead && !this.isHurt()) {
                this.playAnimation(this.IMAGES_WALK)
            }
        }, 100);


        setInterval(() => {
            // console.log('fireballstatus', this.fireballStatus)
            // console.log('idleTime ', this.idleTime)
            if (this.isAboveGround() || (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) || this.isDead() || this.isHurt() || this.world.keyboard.arrowRight && this.world.keyboard.SPACE || this.fireballStatus) {
                this.idleTime = 0
            }
            if (this.idleTime >= 35) {
                this.playAnimation(this.IMAGES_IDLE_LONG)

            } else if (!(this.isAboveGround()) && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isDead() && !(this.world.keyboard.arrowRight) && !(this.isHurt()) && !(this.fireballStatus) && this.idleTime < 35) {
                this.playAnimation(this.IMAGES_IDLE)
                this.idleTime++
            }
        }, 200);
    }

    async throwFireball() {
        let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

        if (this.fireballCooldown <= 0 && this.MP >= this.fireballMPcost && !characterCollidesWithRock) {
            this.fireballStatus = true;
            this.fireballCooldown = this.resetFireballCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK)

            setTimeout(() => {
                if (this.otherDirection) {
                    let fireball = new Fireball(this.x + 100, this.y + 10, this.otherDirection);
                    world.throwableObjects.push(fireball);

                } else {
                    let fireball = new Fireball(this.x + 50, this.y + 10, this.otherDirection);
                    world.throwableObjects.push(fireball);
                }
                this.MP -= this.fireballMPcost;

            }, 300);

            setTimeout(() => {
                this.fireballStatus = false;
                this.currentImage = 0;

            }, 650);
        }
    }
}