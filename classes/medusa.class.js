class Medusa extends MovableObject {
    y = 250;
    width = 194;
    height = 194;
    dpf = 0.03;
    speed = 2;
    HP = 150;
    rockProjectileCooldown = 0;
    resetRockProjectileCooldown = 2500
    rockProjectileStatus = false
    sound_hurt = new Audio('./audio/medusa_hurt.mp3');
    sound_death = new Audio('./audio/medusa_death.mp3');

    IMAGES_WALK = [
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk3.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk4.png',
    ]

    IMAGES_DEATH = [
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death3.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death4.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death6.png',
    ]

    IMAGES_HURT = [
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Hurt1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Hurt2.png',
    ]

    IMAGES_ATTACK = [
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack3.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack3.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack4.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack4.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack6.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack6.png',
    ]

    offset = {
        top: 0,
        bottom: 0,
        left: 70,
        right: -150
    }

    constructor() {
        super().loadImage(this.IMAGES_WALK[0])
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.x = 650 + Math.random(0.5, 1) * 3200;
        this.speed += Math.random() * 0.5;
        this.animate();
    }

    animate() {

        setInterval(() => {
            let medusaGetsHitByFirewall = world.throwableObjects.some(firewall => this.isColliding(firewall));
            let characterGetsTooFarAway = !this.isFinallyDead && (this.x - world.character.x > 420 || this.x - world.character.x < -350 && this.x - world.character.x > -380) && !this.rockProjectileStatus && !medusaGetsHitByFirewall
            let characterGetsTooClose = !this.isFinallyDead && (this.x - world.character.x < 400 || this.x - world.character.x > 350 && this.x - world.character.x < 380) && !this.rockProjectileStatus && !medusaGetsHitByFirewall && (this.x - this.width) < world.level.level_end_x - 200

            if ((this.x - world.character.x <= this.aggroRange) && gameStarted) {
                if (characterGetsTooFarAway) {
                    this.x -= this.speed * 1.5;
                    this.otherDirection = false;

                } else if (characterGetsTooClose) {
                    this.x += this.speed * 1.1;
                    this.otherDirection = true;
                }
            }
        }, 1000 / 60);

        setInterval(() => {
            let medusaGetsHitByProjectile = world.throwableObjects.some(projectile => this.isColliding(projectile));

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);
                if (!isMuted) this.sound_death.play();
                this.spawnManaCrystal(this);
                this.spawnHealthPotion(this);

                // } else if (!this.isFinallyDead && world.character.isColliding(this) ) {
                // this.playAnimation(this.IMAGES_ATTACK);

            } else if (medusaGetsHitByProjectile && !this.isFinallyDead) {
                this.playAnimation(this.IMAGES_HURT);
                if (!isMuted) this.sound_hurt.play();

            } else if (!this.isFinallyDead && !this.rockProjectileStatus) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 150);

        setInterval(() => {
            let characterIsAtHighRange = this.x - world.character.x > 250 && this.x - world.character.x < 500 || this.x - world.character.x < -220 && this.x - world.character.x > -500;
            this.rockProjectileCooldown -= 50;

            if (this.rockProjectileCooldown <= 0) {
                this.rockProjectileCooldown = 0;
            }
            if (!this.isFinallyDead && characterIsAtHighRange && !this.rockProjectileStatus && this.rockProjectileCooldown <= 0) {
                this.otherDirection = false;

                this.throwRockProjectile();
            }

            // if (this.HP > 0) {
            // console.log('Medusa HP: ', this.HP) 
            // }
        }, 100);

    }

    async throwRockProjectile() {
        if (this.rockProjectileCooldown <= 0) {
            this.rockProjectileStatus = true;
            this.rockProjectileCooldown = this.resetRockProjectileCooldown;

            this.playAnimationOnce(this.IMAGES_ATTACK);

            setTimeout(() => {
                if (this.otherDirection) {
                    let rockProjectile = new RockProjectile(world.character.x - 10, this.yGround - 45, this.otherDirection);
                    world.throwableObjects.push(rockProjectile);

                } else {
                    let rockProjectile = new RockProjectile(world.character.x - 80, this.yGround - 45, this.otherDirection);
                    world.throwableObjects.push(rockProjectile);
                }
            }, 200); // short delay before the projectile is thrown

            setTimeout(() => {
                this.rockProjectileStatus = false;
                this.currentImage = 0;
            }, 1500); // delay to ensure the animation is finished and no longer blocks ohther animations
            setTimeout(() => {
                if (this.isDead()) {
                    this.isFinallyDead = true;
                    this.playAnimationOnce(this.IMAGES_DEATH);
                }
            }, 2000);
        }
    }


}
