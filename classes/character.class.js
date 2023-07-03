class Character extends MovableObject {
    x = 50;
    width = 164;
    height = 164;
    speed = 5;
    idleCounter = 0;
    idleTime = 0;
    HP = 100;
    maxHP = 100;
    MP = 100;
    maxMP = 100;
    manaregen = 0.2;
    cameraOffset = 190;
    lastCallTime = 0;

    sound_hit1 = new Audio('./audio/character_hit1.mp3');
    sound_hit2 = new Audio('./audio/character_hit2.mp3');
    sound_jump = new Audio('./audio/jump.mp3');
    sound_death = new Audio('./audio/character_death.mp3');
    sound_specialAttack = new Audio('./audio/firewall_cast.mp3');
    sound_not_enough_mana = new Audio('./audio/not_enough_mana.mp3');
    sound_i_need_more_mana = new Audio('./audio/i_need_more_mana.mp3');

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

    // collision Offset
    offset = {
        top: 20,
        bottom: 90,
        left: 230,
        right: 35
    }

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

    /**
     * sets intervals for charactermechanics and animations
     */
    animate() {
        this.characterMovementInterval();
        this.characterAnimationsInterval();
        this.characterIdleMechanicsInterval();
        this.characterHurtSoundsInterval();
    }

    /**
     * character movement mechanics and animations
     */
    characterMovementInterval() {
        setInterval(() => {
            this.setMPbarWidth(this.MP)
            this.setHPbarWidth(this.HP)
            this.setCameraPosition();
            this.characterMovementExecution();
            this.characterManaRegen();
        }, 1000 / 60);
    }

    /**
     * character's mana regeneration
     */
    characterManaRegen() {
        if (this.MP <= this.maxMP && !this.isFinallyDead) {
            this.MP += this.manaregen;
        }
    }

    /**
     * executes the Movement of the character
     * 
     * @param {*} characterCollidesWithRock // checks if character collides with rock
     */
    characterMovementExecution() {
        let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))
        let characterIsAbleToMoveRight = world.keyboard.RIGHT && this.x < world.level.level_end_x && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock && !this.firewallStatus;
        let characterIsAbleToMoveLeft = world.keyboard.LEFT && this.x > -150 && !this.isFinallyDead && !this.fireballStatus && !characterCollidesWithRock && !this.firewallStatus;
        let characterIsAbleToJump = world.keyboard.SPACE && !this.isAboveGround() && !this.isFinallyDead && !this.firewallStatus && !characterCollidesWithRock;

        if (characterIsAbleToMoveRight) {
            this.moveRight();
        }
        if (characterIsAbleToMoveLeft) {
            this.moveLeft();
        }
        if (characterIsAbleToJump) {
            this.jump();
            if (!isMuted) this.sound_jump.play();
        }
    }

    /**
     * handles the character animations
     */
    characterAnimationsInterval() {
        setInterval(() => {
            let characterIsAbleToWalk = ((world.keyboard.RIGHT || world.keyboard.LEFT)) && !this.isAboveGround() && !this.fireballStatus && !this.isFinallyDead && !this.isHurt() && !this.firewallStatus
            let characterIsAbleToJump = (world.keyboard.SPACE && !this.fireballStatus && !this.isFinallyDead) || this.isAboveGround() && !this.fireballStatus && !this.firewallStatus
            this.setFireCooldowns();

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
    }

    /**
     * handles the character's firespell cooldowns
     */
    setFireCooldowns() {
        this.fireballCooldown -= 100;
        this.firewallCooldown -= 100;

        if (this.fireballCooldown <= 0) {
            this.fireballCooldown = 0;
        }

        if (this.firewallCooldown <= 0) {
            this.firewallCooldown = 0;
        }
    }

    /**
     * handles the character's idle animations and functionalities
     */
    characterIdleMechanicsInterval() {
        setInterval(() => {
            let nothingHappensToCharacter = !(this.isAboveGround()) && !(world.keyboard.RIGHT || world.keyboard.LEFT) && !this.isDead() && !(world.keyboard.arrowRight) && !(this.isHurt()) && !(this.fireballStatus) && this.idleTime < 35 && !this.firewallStatus
            let somethingHappensToCharacter = this.isAboveGround() || (world.keyboard.RIGHT || world.keyboard.LEFT) || this.isDead() || this.isHurt() || world.keyboard.arrowRight && world.keyboard.SPACE || this.fireballStatus || this.firewallStatus

            if (somethingHappensToCharacter) {
                this.idleTime = 0
            }
            if (this.idleTime >= 35) {
                this.playAnimation(this.IMAGES_IDLE_LONG)

            } else if (nothingHappensToCharacter) {
                this.playAnimation(this.IMAGES_IDLE)
                this.idleTime++
            }
        }, 200);
    }

    /**
     * handles the two character's hurt sounds randomly
     */
    characterHurtSoundsInterval() {
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

    /**
     * character camera positioning
     */
    setCameraPosition() {
        if (!this.otherDirection) {
            this.cameraOffset >= 200 ? this.cameraOffset -= 2 : this.cameraOffset -= 0;
            world.camera_x = -this.x + this.cameraOffset;
        } else {
            this.cameraOffset <= 400 ? this.cameraOffset += 2 : this.cameraOffset -= 0;
            world.camera_x = -this.x + this.cameraOffset;
        }
    }

    /**
     * throws a fireball in the direction the character is facing
     */
    throwFireball() {
        let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

        if (this.fireballCooldown <= 0 && this.MP >= this.fireballMPcost && !characterCollidesWithRock) {
            this.fireballStatus = true;
            this.fireballCooldown = this.resetFireballCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK)
            this.fireballCastAnimationTimeout();
            this.fireballAnimationTimeout();
        } else if (this.fireballCooldown <= 0 && this.MP < this.fireballMPcost) {
            this.notEnoughMana();
        }
    }

    /**
     * delay to ensure that the cast animation is finished before the fireball is thrown
     */
    fireballCastAnimationTimeout() {
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
    }

    /**
     * delay to ensure that the fireball animation is finished before the next fireball can be thrown
     */
    fireballAnimationTimeout() {
        setTimeout(() => {
            this.fireballStatus = false;
            this.currentImage = 0;

        }, 750);
    }

    /**
     * casts a firewall in the direction the character is facing
     */
    castFirewall() {
        let characterCollidesWithRock = world.throwableObjects.some(object => object.isColliding(this))

        if (this.firewallCooldown <= 0 && this.MP >= this.firewallMPcost && !characterCollidesWithRock) {
            this.firewallStatus = true;
            this.firewallCooldown = this.resetFirewallCooldown;
            this.playAnimationOnce(this.IMAGES_SPECIAL_ATTACK)
            this.firewallCastAnimationTimeout();
            this.firewallAnimationTimeout();
        } else if (this.firewallCooldown <= 0 && this.MP < this.firewallMPcost) {
            this.notEnoughMana();
        }
    }

    /**
     * delay to ensure that the cast animation is finished before the firewall is cast
     */
    firewallCastAnimationTimeout() {
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
    }

    /**
     * delay to ensure that the firewall animation is finished before the next firewall can be cast
     */
    firewallAnimationTimeout() {
        setTimeout(() => {
            this.firewallStatus = false;
            this.currentImage = 0;
        }, 700);
    }

    /**
     * plays a sound if MP (ManaPoints) are too low
     */
    notEnoughMana() {
        let currentTime = Date.now();
        if (currentTime - this.lastCallTime >= 2000) {
            if (Math.random() < 0.5) {
                if (!isMuted) this.sound_i_need_more_mana.play();
            } else {
                if (!isMuted) this.sound_not_enough_mana.play();
            }
            this.lastCallTime = currentTime;
        }
    }
}