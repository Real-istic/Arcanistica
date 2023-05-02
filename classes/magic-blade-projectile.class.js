class MagicBladeProjectile extends ThrowableObject {
    dpf = 0.02 + Math.random() * 0.01;

    offset = world.level.enemies[0].otherDirection ?
        { top: 35, bottom: 160, left: 150, right: -150 } :
        { top: 35, bottom: 160, left: -40, right: 70 };

    projectileOffset = 80;
    speed = 20;
    range = 800;
    clearProjectileTime = 300;
    sound_castMagicBlade = new Audio('./audio/endboss_cast_magic_blade.mp3');

    IMAGES_PROJECTILE_MAGICBLADE = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade1.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade2.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade3.png',
    ]

    IMAGES_PROJECTILE_MAGICBLADE_HIT = [
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade4.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade5.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade6.png',
        './assets/bosses-pixel-art-game-assets-pack/PNG/Magic_Attacks/blade7.png',
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
        if (!isMuted) this.sound_castMagicBlade.play();

    }

    /**
     * handles the animation of the magic blade and the deletion
     */
    animate() {
        setInterval(() => {
            let endboss = world.level.enemies[0];
            let characterGetsHitByMagicBlade = this.isColliding(world.character);
            let magicBladeGetsOutOfRange = endboss.x > this.x + this.range || endboss.x < this.x - this.range;

            if (characterGetsHitByMagicBlade || magicBladeGetsOutOfRange) {
                this.playAnimationOnce(this.IMAGES_PROJECTILE_MAGICBLADE_HIT);
                this.deleteProjectile(this.clearProjectileTime);

            } else if (!characterGetsHitByMagicBlade) {
                this.playAnimation(this.IMAGES_PROJECTILE_MAGICBLADE);
            }
        }, 50);
    }

}