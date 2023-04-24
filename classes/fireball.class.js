class Fireball extends ThrowableObject {
    dpf = 0.04 + Math.random() * 0.04;
    offset = {
        top: 0,
        bottom: 0,
        left: 170,
        right: 20
    }
    projectileOffset = 130;
    speed = 20;
    range = 350;
    sound_castFireball = new Audio('./audio/fireball_cast.mp3');

    IMAGES_FIREBALL = [
        // './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire1.png',
        // './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire2.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire3.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire4.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire5.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire6.png'
    ];

    IMAGES_FIREBALL_HIT = [
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire7.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire8.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire9.png',
        './assets/10-magic-effects-pixel-art-pack/PNG/fire/fire10.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_FIREBALL[0]);
        this.loadImages(this.IMAGES_FIREBALL);
        this.loadImages(this.IMAGES_FIREBALL_HIT);
        this.animate();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 150;
        this.height = 150;
        this.throw(this.projectileOffset, this.speed);
        if (!isMuted) this.sound_castFireball.play();
    }

    animate() {

        /**
         * This interval determines the animation of the fireball.
         */
        setInterval(() => {
            let enemyGetsHitByFireball = world.level.enemies.some(enemy => enemy.isColliding(this) && !enemy.isFinallyDead)
            let fireballGetsOutOfRange = world.character.x > this.x + this.range || world.character.x < this.x - this.range;
            // console.log('last hit: ', )
            // console.log('Fireballs', world.throwableObjects)

            if (enemyGetsHitByFireball || fireballGetsOutOfRange) {
                this.playAnimationOnce(this.IMAGES_FIREBALL_HIT);
                this.deleteProjectile(300);

            } else if (!enemyGetsHitByFireball) {
                this.playAnimation(this.IMAGES_FIREBALL);
            }
            if (this.isAboveGround()) { // if fireball is above ground, it will fall down
                this.y += 15;
            }

        }, 50);
    }
}