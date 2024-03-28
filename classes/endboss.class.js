class Endboss extends MovableObject {
    y = 110;
    width = 364;
    height = 364;
    dpf = 0.01;
    HP = 350;
    speed = 2;

    // magicBlade
    magicBladeCooldown = 0;
    resetMagicBladeCooldown = 1000;
    magicBladeStatus = false;

    // firecircle
    firecircleCooldown = 0;
    resetFirecircleCooldown = 2000;
    firecircleStatus = false;

    offset = {
        top: 85,
        bottom: 0,
        left: 10,
        right: -50
    }

    sound_attack = new Audio('./audio/endboss_attack.mp3');
    sound_hurt = new Audio('./audio/endboss_hurt.mp3');
    sound_death = new Audio('./audio/endboss_death.mp3');
    sound_taunt = new Audio('./audio/endboss_taunt.mp3');
    sound_taunt = new Audio('./audio/endboss_taunt.mp3');
    soundSwitchTaunt = false;

    IMAGES_WALK = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk5.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk6.png',
    ]

    IMAGES_DEATH = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
    ]

    IMAGES_HURT = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Hurt1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Hurt2.png',
    ]

    IMAGES_ATTACK = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack5.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack6.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack7.png',
    ]

    IMAGES_ATTACK_MAGICBLADE = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade5.png',
    ]

    IMAGES_ATTACK_FIRECIRCLE = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire5.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALK[0])
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.loadImages(this.IMAGES_ATTACK_MAGICBLADE)
        this.loadImages(this.IMAGES_ATTACK_FIRECIRCLE)
        this.x = 4200;
        this.animate();
    }

    /**
     * sets the Endboss intervals for movement, attack and animation
     */
    animate() {
        this.endbossMovementIntevall();
        this.endbossAttackIntervall();
        this.endbossAnimationInterval();
    }

    /**
     * sets the endboss animation interval
     */
    endbossAnimationInterval() {
        setInterval(() => {
            let fireballHitsEndboss = world.throwableObjects.some(projectile => (this.isColliding(projectile) && projectile instanceof Fireball));
            let firewallHitsEndboss = world.throwableObjects.some(projectile => (this.isColliding(projectile) && projectile instanceof Firewall));
            this.endbossTauntSound();

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);
                if (!isMuted) this.sound_death.play();

            } else if ((fireballHitsEndboss || firewallHitsEndboss) && !this.isFinallyDead) {
                this.playAnimation(this.IMAGES_HURT);
                if (!isMuted) this.sound_hurt.play();
                this.dropCollectables(fireballHitsEndboss, firewallHitsEndboss);

            } else if (!this.isFinallyDead && world.character.isColliding(this) && !this.magicBladeStatus && !this.firecircleStatus) {
                this.playAnimation(this.IMAGES_ATTACK);
                if (!isMuted) this.sound_attack.play();

            } else if (!this.isFinallyDead && !this.magicBladeStatus && !this.firecircleStatus) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 180);
    }

    /**
     * plays a taunt sound if the player gets in range of the Endboss
     */
    endbossTauntSound() {
        if ((this.x - world.character.x <= 650) && !this.soundSwitchTaunt) {
            this.soundSwitchTaunt = true; // taunts only once if the player gets in range
            if (!isMuted) this.sound_taunt.play();
        }
    }

    /**
     * handles the Collectables that the Endboss drops if he's hit by a fireball or firewall
     * 
     * @param {*} fireballHitsEndboss // true if the Endboss is hit by a fireball
     * @param {*} firewallHitsEndboss // true if the Endboss is hit by a firewall
     */
    dropCollectables(fireballHitsEndboss, firewallHitsEndboss) {
        if (Math.random() < 0.25 && fireballHitsEndboss) { // reduced dropchance
            this.spawnManaCrystal(this);
            this.spawnHealthPotion(this)
        }
        if (Math.random() < 0.1 && firewallHitsEndboss) { // heavily reduced dropchance
            this.spawnManaCrystal(this);
            this.spawnHealthPotion(this)
        }
    }

    /**
     * movement-mechanics of the Endboss
     */
    endbossMovementIntevall() {
        setInterval(() => {
            if (this.x - world.character.x <= this.aggroRange) { // waits for the player to be in range
                if (!this.isFinallyDead && this.x > world.character.x && !this.magicBladeStatus) {
                    this.x -= this.speed;
                    this.otherDirection = false;

                } else if (!this.isFinallyDead && this.x < world.character.x - 100 && !this.magicBladeStatus) {
                    this.x += this.speed;
                    this.otherDirection = true;
                }
            }
        }, 1000 / 60);
    }

    /**
     * attack-mechanics of the Endboss depends on the Range to the player
     */
    endbossAttackIntervall() {
        setInterval(() => {
            let playerIsAtMidRange = this.x - world.character.x > 150 && this.x - world.character.x < 370 || this.x - world.character.x < -250 && this.x - world.character.x > -470;
            let playerIsAtHighRange = this.x - world.character.x > 380 && this.x - world.character.x < 1200 || this.x - world.character.x < -480 && this.x - world.character.x > -1300;
            this.endbossCooldownHandling();

            if (this.magicBladeCooldown <= 0 && !this.magicBladeStatus && !this.isFinallyDead && playerIsAtMidRange && !playerIsAtHighRange && !this.firecircleStatus) {
                this.throwMagicBlade();
            }
            if (this.firecircleCooldown <= 0 && !this.firecircleStatus && !this.isFinallyDead && !playerIsAtMidRange && playerIsAtHighRange) {
                this.throwFirecircle()
            }
        }, 100);
    }

    endbossCooldownHandling() {
        this.firecircleCooldown -= 50;
        this.magicBladeCooldown -= 50;

        if (this.magicBladeCooldown <= 0) {
            this.magicBladeCooldown = 0;
        }
        if (this.firecircleCooldown <= 0) {
            this.firecircleCooldown = 0;
        }
    }

    /**
     * throws a magic blade at the player
     */
    throwMagicBlade() {
        if (this.magicBladeCooldown <= 0) {
            this.magicBladeStatus = true;
            this.magicBladeCooldown = this.resetMagicBladeCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK_MAGICBLADE);
            this.magicBladeCastAnimationTimeout();
            this.magicBladeAnimationTimeout();
        }
    }

    /**
     * delay that the magic blade is thrown after the cast animation is finished
     */
    magicBladeCastAnimationTimeout() {
        setTimeout(() => {
            if (this.otherDirection) {
                let magicBladeProjectile = new MagicBladeProjectile(this.x - 300, this.y + 60 + Math.random() * 100, this.otherDirection);
                world.throwableObjects.push(magicBladeProjectile);

            } else {
                let magicBladeProjectile = new MagicBladeProjectile(this.x + 50, this.y + 60 + Math.random() * 100, this.otherDirection);
                world.throwableObjects.push(magicBladeProjectile);
            }
        }, 600); 
    }

    /**
     * delay to ensure that the magic blade animation is finished before the magic blade can be thrown
     */
    magicBladeAnimationTimeout() {
        setTimeout(() => {
            this.magicBladeStatus = false;
            this.currentImage = 0;
        }, 700); 
    }

    /**
     * throws a firecircle at the player
     */
    throwFirecircle() {
        if (this.firecircleCooldown <= 0) {
            this.firecircleStatus = true;
            this.firecircleCooldown = this.resetFirecircleCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK_FIRECIRCLE);
            this.firecircleCastAnimationTimeout();
            this.firecircleAnimationTimeout();
        }
    }

    /**
     * delay to ensure that the firecircle is thrown after the cast animation is finished
     */
    firecircleCastAnimationTimeout() {
        setTimeout(() => {
            if (this.otherDirection) {
                let firecircleProjectile = new FirecircleProjectile(this.x - 300, this.y + 40 + Math.random() * 100, this.otherDirection);
                world.throwableObjects.push(firecircleProjectile);

            } else {
                let firecircleProjectile = new FirecircleProjectile(this.x + 50, this.y + 40 + Math.random() * 100, this.otherDirection);
                world.throwableObjects.push(firecircleProjectile);
            }
        }, 600); 
    }

    /**
     * delay to ensure that the firecircle animation is finished before the next firecircle can be thrown
     */
    firecircleAnimationTimeout() {
        setTimeout(() => {
            this.firecircleStatus = false;
            this.currentImage = 0;
        }, 700); 
    }

}


