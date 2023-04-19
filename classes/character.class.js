class Character extends MovableObject {
    x = 50;
    width = 164;
    height = 164;
    speed = 5;
    idleCounter = 0;
    world;
    idleTime = 0;
    sound_walk = new Audio('./audio/walk_grass.mp3');
    sound_hit1 = new Audio('./audio/character_hit1.mp3');
    sound_hit2 = new Audio('./audio/character_hit2.mp3');
    sound_jump = new Audio('./audio/jump.mp3');
    sound_death = new Audio('./audio/character_death.mp3');
    sound_specialAttack = new Audio('./audio/firewall_cast.mp3');

    // fireBALL
    fireballCooldown = 0;
    resetFireballCooldown = 800;
    fireballStatus = false;
    fireballMPcost = 30;

    // fireWALL
    firewallCooldown = 0;
    resetFirewallCooldown = 2500
    firewallStatus = false
    firewallMPcost = 60;

    offset = {
        top: 20,
        bottom: 90,
        left: 230,
        right: 35
    }
    HP = 100;
    maxHP = 100;
    MP = 100;
    maxMP = 100;
    manaregen = 0.2;
    cameraOffset = 190;


    IMAGES_WALK = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
    ]

    IMAGES_JUMP = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Jump/jump7.png',
    ];

    IMAGES_IDLE = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
    ]

    IMAGES_IDLE_LONG = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle7.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle8.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle9.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle11.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Idle/idle13.png',
    ];

    IMAGES_DEAD = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death7.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death8.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death9.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death10.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Death/death11.png',
    ]

    IMAGES_HURT = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Hurt/hurt4.png',
    ]

    IMAGES_ATTACK = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack6.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack/attack7.png',
    ]

    IMAGES_SPECIAL_ATTACK = [
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra0.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra1.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra2.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra3.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra4.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra5.png',
        './assets/pixel-art-characters-for-platformer-games/PNG/Mage/Attack_Extra/attack_extra5.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_IDLE_LONG);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_SPECIAL_ATTACK);
        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {

            let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

            this.setMPbarWidth(this.MP)
            this.setHPbarWidth(this.HP)
            this.setCameraPosition();

            if (this.MP <= this.maxMP && !this.isFinallyDead) {
                this.MP += this.manaregen;
            }

            if (this.world.keyboard.RIGHT && this.x < world.level.level_end_x && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock && !this.firewallStatus) {
                this.moveRight();

            }

            if (this.world.keyboard.LEFT && this.x > -150 && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock && !this.firewallStatus) {
                this.moveLeft();

            }
            if (this.world.keyboard.SPACE && !this.isAboveGround() && !characterCollidesWithRock) {
                this.jump();
                if (!isMuted) this.sound_jump.play();
            }
        }, 1000 / 60);

        setInterval(() => {
            let characterIsAbleToWalk = ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT)) && !this.isAboveGround() && !this.fireballStatus && !this.isFinallyDead && !this.isHurt() && !this.firewallStatus
            let characterIsAbleToJump = (this.world.keyboard.SPACE && !this.fireballStatus && !this.isFinallyDead) || this.isAboveGround() && !this.fireballStatus && !this.firewallStatus

            this.fireballCooldown -= 100;
            this.firewallCooldown -= 100;

            if (this.fireballCooldown <= 0) {
                this.fireballCooldown = 0;
            }

            if (this.firewallCooldown <= 0) {
                this.firewallCooldown = 0;
            }

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                if (!isMuted) this.sound_death.play();
                this.playAnimationOnce(this.IMAGES_DEAD)

            } else if (this.isHurt() && !this.fireballStatus) {
                this.playAnimation(this.IMAGES_HURT)

            } else if (characterIsAbleToJump) {
                this.playAnimation(this.IMAGES_JUMP)

            } else if (characterIsAbleToWalk) {
                this.playAnimation(this.IMAGES_WALK)
            }
        }, 100);


        setInterval(() => {
            let nothingHappensToCharacter = !(this.isAboveGround()) && !(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && !this.isDead() && !(this.world.keyboard.arrowRight) && !(this.isHurt()) && !(this.fireballStatus) && this.idleTime < 35 && !this.firewallStatus

            let somethingHappensToCharacter = this.isAboveGround() || (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) || this.isDead() || this.isHurt() || this.world.keyboard.arrowRight && this.world.keyboard.SPACE || this.fireballStatus || this.firewallStatus

            // console.log('fireballstatus', this.fireballStatus)
            // console.log('idleTime ', this.idleTime)
            if (somethingHappensToCharacter) {
                this.idleTime = 0
            }
            if (this.idleTime >= 35) {
                this.playAnimation(this.IMAGES_IDLE_LONG)

            } else if (nothingHappensToCharacter) {
                this.playAnimation(this.IMAGES_IDLE)
                this.idleTime++
            }
            if (this.isHurt() && !this.fireballStatus) {
                this.playAnimation(this.IMAGES_HURT)
            }
        }, 200);

        setInterval(() => {
            if (this.isHurt() && !this.fireballStatus) {
                if (Math.random() < 0.5) {
                    if (!isMuted) this.sound_hit1.play();
                } else {
                    if (!isMuted) this.sound_hit2.play();
                }
            }
        }, 400);
    }



    setCameraPosition() {
        if (!this.otherDirection) {
            this.cameraOffset >= 200 ? this.cameraOffset -= 3 : this.cameraOffset -= 0;
            this.world.camera_x = -this.x + this.cameraOffset;
        } else {
            this.cameraOffset <= 400 ? this.cameraOffset += 3 : this.cameraOffset -= 0;
            this.world.camera_x = -this.x + this.cameraOffset;
        }
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

            }, 750);
        }
    }

    async castFirewall() {
        let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

        if (this.firewallCooldown <= 0 && this.MP >= this.firewallMPcost && !characterCollidesWithRock) {
            this.firewallStatus = true;
            this.firewallCooldown = this.resetFirewallCooldown;
            this.playAnimationOnce(this.IMAGES_SPECIAL_ATTACK)

            setTimeout(() => {
                if (this.otherDirection) {
                    let firewall = new Firewall(this.x - 250, this.yGround + 90, this.otherDirection);
                    world.throwableObjects.push(firewall);

                } else {
                    let firewall = new Firewall(this.x + 150, this.yGround + 90, this.otherDirection);
                    world.throwableObjects.push(firewall);
                }
                this.MP -= this.firewallMPcost;
                if (!isMuted) this.sound_specialAttack.play();

            }, 300);

            setTimeout(() => {
                this.firewallStatus = false;
                this.currentImage = 0;

            }, 700);
        }
    }
}