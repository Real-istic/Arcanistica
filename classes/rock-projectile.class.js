class RockProjectile extends ThrowableObject {
    dpf = 0.002 + Math.random() * 0.002;
    offset = {
        top: 0,
        bottom: 0,
        left: 90,
        right: -140
    }
    projectileOffsetX = 80;
    speed = 0;
    range = 800;
    hitdelay = false
    clearProjectileTime = 1500;
    sound_hitByRock = new Audio('./audio/hit_by_rock.mp3');

    IMAGES_PROJECTILE_ROCK = [
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone8.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone7.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone6.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone5.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone4.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone3.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone1.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        './assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone1.png',
    ]

    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_PROJECTILE_ROCK[0]);
        this.loadImages(this.IMAGES_PROJECTILE_ROCK);
        this.animate();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 250;
        this.height = 250;
        this.throw(this.projectileOffsetX, this.speed);
        this.playAnimationOnce(this.IMAGES_PROJECTILE_ROCK);
        if (!isMuted) this.sound_hitByRock.play();

    }
    
    /**
     * deletes unnecessary projectiles
     */
    animate() {
        setInterval(() => {
            this.deleteProjectile(this.clearProjectileTime);
        }, 50);
    }
}