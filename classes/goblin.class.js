class Goblin extends MovableObject {
    y = 290;
    width = 164;
    height = 164;
    dpf = 0.02;
    speed = 0.5;
    IMAGES_WALKING = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk3.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk4.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk5.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk6.png',
    ]

    IMAGES_DEATH = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death3.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death4.png',
    ]

    IMAGES_HURT = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/hurt1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/hurt2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/hurt3.png',
    ]

    IMAGES_ATTACK = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/attack1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/attack2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/attack3.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/attack4.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/attack5.png',
    ]

    offset = {
        top: 0,
        bottom: 0,
        left: 30,
        right: -150
    }
    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.x = 550 + Math.random() * 2500;
        this.speed += Math.random() * 0.075;

        this.animate();
    }

    animate() {
       
        setInterval(() => {
            if (!this.isFinallyDead && this.x - 80> world.character.x) {
            this.x -= this.speed;
            this.otherDirection = false;

            } else if (!this.isFinallyDead && this.x + 80 < world.character.x) {
            this.x += this.speed;
            this.otherDirection = true;
            }
        }, 1000 / 60);

        setInterval(() => {

            // console.log('goblinHP', this.HP)

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);

            } else if (!this.isFinallyDead && world.character.isColliding(this) ) {
                this.playAnimation(this.IMAGES_ATTACK);

            } else if ((world.throwableObjects.some(Fireball => Fireball.isColliding(this))) && !this.isFinallyDead) {
                this.playAnimation(this.IMAGES_HURT);

            } else if (!this.isFinallyDead){
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 150);
    }
}
