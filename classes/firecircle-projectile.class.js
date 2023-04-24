class FirecircleProjectile extends ThrowableObject {
    dpf = 0.03 + Math.random() * 0.03;
    offset = {
        top: 0,
        bottom: 150,
        left: -20,
        right: -120
    }

    offset = world.level.enemies[0].otherDirection ?
    { top: 0, bottom: 150, left: 100, right: -120}:
    { top: 0, bottom: 150, left: -20, right: 50 };

    yGround = 240;
    projectileOffset = 100;
    speed = 20;
    speedY = 3;
    acceleration = 0.03;
    range = 1200;
    clearProjectileTime = 10;
    sound_castFirecircle = new Audio('./audio/endboss_cast_firecircle.mp3');

    IMAGES_FIRECIRCLE = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire3.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire5.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire6.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire7.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_FIRECIRCLE[0]);
        this.loadImages(this.IMAGES_FIRECIRCLE);
        this.animate();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 246;
        this.height = 246;
        this.throw(this.projectileOffset, this.speed);
        if (!isMuted) this.sound_castFirecircle.play();
    }

    /**
     * applies gravity to the firecircle projectile
     */
    applyFireCircleGravity() {
        const interval = setInterval(() => {
          if (this.isAboveGround() || this.speedY > 0) {
            this.y -= this.speedY
            this.speedY -= this.acceleration;
          } else {
            this.y = this.yGround;
          }
        }, 50);
      
        // removes unnecessary intervals
        setTimeout(() => {
          clearInterval(interval);
        }, 1000);
      }

    animate() {
        /**
         * firecircle animation and removal
         * 
         */
        setInterval(() => {
            let endboss = world.level.enemies[0];
            let firecircleGetsOutOfRange = endboss.x > this.x + this.range || endboss.x < this.x - this.range;

            if (firecircleGetsOutOfRange) {
                this.deleteProjectile(this.clearProjectileTime);

            } else {
                this.playAnimationOnce(this.IMAGES_FIRECIRCLE);
            }
        }, 100);
    }

}