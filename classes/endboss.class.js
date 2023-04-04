class Endboss extends MovableObject {
    y = 110;
    width = 364;
    height = 364;
    dpf = 0.01;
    HP = 300;
    IMAGES_WALKING = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk6.png',
    ]

    IMAGES_DEATH = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Death4.png',
    ]

    IMAGES_HURT = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Hurt1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Hurt2.png',
    ]

    IMAGES_ATTACK = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack6.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Attack7.png',
    ]

    offset = {
        top: 85,
        bottom: 0,
        left: 10,
        right: -50 
    }


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.speed = 0.2;
        this.x = 4200;
        this.animate();
    }

    animate() {
        

        setInterval(() => {
            if (!this.isFinallyDead && this.x > world.character.x ) {
            this.x -= this.speed;
            this.otherDirection = false;

            } else if (!this.isFinallyDead && this.x < world.character.x -100) {
            this.x += this.speed;
            this.otherDirection = true;
            }
        }, 1000 / 60);


        setInterval(() => {

            console.log('BOSS HP: ', this.HP)

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);
            
            } else if ((world.throwableObjects.some(Fireball => Fireball.isColliding(this))) && !this.isFinallyDead) {
                this.playAnimation(this.IMAGES_HURT);
            }

            else if (!this.isFinallyDead && world.character.isColliding(this) ) {
                this.playAnimation(this.IMAGES_ATTACK);

            } else if (!this.isFinallyDead){
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 180);
    }
}


