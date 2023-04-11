class ManaCrystal extends MovableObject {
    MPgain = 30;
    speedY = 5;
    speedX = 4 + this.getRndInteger(4, 5);
    acceleration = 0.3;
    accelerationX = 0.001;
    yGround = this.getRndInteger(140, 360)
    enemy;


    IMAGES = [
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal1.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal2.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal3.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal4.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal5.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal6.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal7.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal8.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal9.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
    ]

    constructor(enemy) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = enemy.x;
        this.y = enemy.y + enemy.offset.top;
        this.width = 50;
        this.height = 50;
        this.enemy = enemy;
        this.animate();
        this.applyGravityToCollectable();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 100);
    }

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    applyGravityToCollectable() {
        setInterval(() => {
            // let enemyToTheRight = this.x - 100 > world.character.x;
            // let enemyToTheLeft = this.x + 100 < world.character.x;

            if ((this.isAboveGround() || this.speedY > 0) && !this.enemy.otherDirection) {
                this.y -= this.speedY
                this.x -= this.speedX
                this.speedY -= this.acceleration;
                this.speedX += this.accelerationX;
            } else if ((this.isAboveGround() || this.speedY > 0) && this.enemy.otherDirection) {
                this.y -= this.speedY
                this.x += this.speedX
                this.speedY -= this.acceleration;
                this.speedX -= this.accelerationX;
            } else {
                this.y = this.yGround;
            }
        }, 1000 / 100);
    }

}