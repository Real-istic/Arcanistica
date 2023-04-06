class MagicBladeProjectile extends ThrowableObject {
    dpf = 0.03 + Math.random() * 0.01;
    offset = {
        top: 0,
        bottom: 0,
        left: 170,
        right: 20
    }
    projectileOffset = 80;
    speed = -20;
    range = 250;
    

    IMAGES_PROJECTILE_MAGICBLADE = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade3.png',
    ]

    IMAGES_PROJECTILE_MAGICBLADE_HIT = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade6.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade7.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_PROJECTILE_MAGICBLADE[0]);
        this.loadImages(this.IMAGES_PROJECTILE_MAGICBLADE);
        this.loadImages(this.IMAGES_PROJECTILE_MAGICBLADE_HIT);
        this.animate();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 250;
        this.height = 250;
        this.throw(this.projectileOffset, this.speed);
    }

    animate() {

        setInterval(() => {
            let endboss = world.level.enemies[2];

            let characterGetsHitByMagicBlade = world.character.isColliding(this);
            let magicBladeGetsOutOfRange = endboss > this.x + this.range || endboss < this.x - this.range;
            // console.log('last hit: ', )
            // console.log('Fireballs', world.throwableObjects)

            if (characterGetsHitByMagicBlade || magicBladeGetsOutOfRange) {
                this.playAnimationOnce(this.IMAGES_PROJECTILE_MAGICBLADE_HIT);
                this.deleteProjectile();

            } else if (!characterGetsHitByMagicBlade) {
                this.playAnimation(this.IMAGES_PROJECTILE_MAGICBLADE);
            }

        }, 50);
    }

}