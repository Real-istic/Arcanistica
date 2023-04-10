class FirecircleProjectile extends ThrowableObject {
    dpf = 0.01 + Math.random() * 0.01;
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
    speed = 25;
    speedY = 0.5;
    acceleration = 0.0005;
    range = 1200;
    clearProjectileTime = 10;

    IMAGES_FIRECIRCLE = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire6.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire7.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire9.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/fire8.png',
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
    }

    animate() {

        setInterval(() => {
            let endboss = world.level.enemies[0];
            let firecircleGetsOutOfRange = endboss.x > this.x + this.range || endboss.x < this.x - this.range;

            if (firecircleGetsOutOfRange) {
                this.deleteProjectile(this.clearProjectileTime);

            } else {
                this.playAnimationOnce(this.IMAGES_FIRECIRCLE);
            }
        }, 50);
    }

}