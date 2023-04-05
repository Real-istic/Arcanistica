class Fireball extends ThrowableObject {
    dpf = 0.03 + Math.random() * 0.03;
    offset = {
        top: 0,
        bottom: 0,
        left: 170,
        right: 20
    }
    speed = 20;
    range = 350;

    IMAGES_FIREBALL = [
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire1.png',
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire2.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire3.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire4.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire5.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire6.png'
    ];

    IMAGES_FIREBALL_HIT = [
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire7.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire8.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire9.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire10.png',
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
        this.throw();
    }

    throw() {
        // this.speedY = 0.12;
        // this.applyGravity();
        if (this.otherDirection) {
            this.x -= 130
            setInterval(() => {
                this.x -= this.speed;
            }, 50);
        } else {
            setInterval(() => {
                this.x += this.speed;
            }, 50);
        }
    }

    animate() {

        setInterval(() => {
            let enemyGetsHitByFireball = world.level.enemies.some(enemy => enemy.isColliding(this));
            let fireballGetsOutOfRange = world.character.x > this.x + this.range || world.character.x < this.x - this.range;
            // console.log('last hit: ', )
        // console.log('Fireballs', world.throwableObjects)

            if (enemyGetsHitByFireball || fireballGetsOutOfRange) {
                this.playAnimationOnce(this.IMAGES_FIREBALL_HIT);
                this.deleteFireball();

            } else if (!enemyGetsHitByFireball) {
                this.playAnimation(this.IMAGES_FIREBALL);
            }

        }, 50);
    }

    async deleteFireball() {
        await new Promise(resolve => setTimeout(resolve, 300));
        let fireballIndex = world.throwableObjects.indexOf(this);
        
        if (fireballIndex >= 0) {
        world.throwableObjects.splice(fireballIndex, 1);
        }
    }
}