class RockProjectile extends ThrowableObject {
    dpf = 0.01 + Math.random() * 0.01;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
    projectileOffsetX = 80;
    speed = -20;
    range = 800;
    

    IMAGES_PROJECTILE_ROCK = [
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone8.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone7.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone8.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone7.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone6.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone4.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone3.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone2.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Stone1.png',
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
    }

    animate() {

        setInterval(() => {
            let characterGetsHitByRockProjectile = world.character.isColliding(this);

            // console.log('last hit: ', )
            // console.log('Fireballs', world.throwableObjects)

            if (characterGetsHitByRockProjectile) {
                this.playAnimationOnce(this.IMAGES_PROJECTILE_ROCK_HIT);
                this.deleteProjectile();
            } 
        }, 50);
    }
}