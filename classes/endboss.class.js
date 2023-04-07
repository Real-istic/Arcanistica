class Endboss extends MovableObject {
    y = 110;
    width = 364;
    height = 364;
    dpf = 0.01;
    HP = 300;
    magicBladeCooldown = 1000;
    resetMagicBladeCooldown = 1000;
    magicBladeStatus = false;
    IMAGES_WALK = [
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

    IMAGES_ATTACK_MAGICBLADE = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_blade5.png',
    ]

    offset = {
        top: 85,
        bottom: 0,
        left: 10,
        right: -50
    }


    constructor() {
        super().loadImage(this.IMAGES_WALK[0])
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.loadImages(this.IMAGES_ATTACK_MAGICBLADE)
        this.speed = 0.2;
        this.x = 4200;
        this.animate();
    }

    animate() {


        setInterval(() => {
            // console.log('magicBladeCooldown: ', this.magicBladeCooldown)
            if (!this.isFinallyDead && this.x > world.character.x && !this.magicBladeStatus == true) {
                this.x -= this.speed;
                this.otherDirection = false;

            } else if (!this.isFinallyDead && this.x < world.character.x - 100 && !this.magicBladeStatus == true) {
                this.x += this.speed;
                this.otherDirection = true;
            }
        }, 1000 / 60);


        setInterval(() => {
            let playerIsTooClose = this.x - world.character.x < 120 && this.x - world.character.x > -180;
            this.magicBladeCooldown -= 50;
            if (this.magicBladeCooldown <= 0) {
                this.magicBladeCooldown = 0;
            }
            if (this.magicBladeCooldown <= 0 && !this.magicBladeStatus && !this.isFinallyDead && !playerIsTooClose) {
                this.throwMagicBlade();
            }
        }, 100);

        setInterval(() => {

            // console.log('BOSS HP: ', this.HP)

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);

            } else if ((world.throwableObjects.some(Fireball => Fireball.isColliding(this))) && !this.isFinallyDead && !this.magicBladeStatus) {
                this.playAnimation(this.IMAGES_HURT);
            }

            else if (!this.isFinallyDead && world.character.isColliding(this) && !this.magicBladeStatus) {
                this.playAnimation(this.IMAGES_ATTACK);

            } else if (!this.isFinallyDead && !this.magicBladeStatus) {
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 180);
    }

    async throwMagicBlade() {
        if (this.magicBladeCooldown <= 0) {
            this.magicBladeStatus = true;
            this.magicBladeCooldown = this.resetMagicBladeCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK_MAGICBLADE);

            setTimeout(() => {
                if (this.otherDirection) {
                    let magicBladeProjectile = new MagicBladeProjectile(this.x - 200, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(magicBladeProjectile);

                } else {
                    let magicBladeProjectile = new MagicBladeProjectile(this.x - 100, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(magicBladeProjectile);
                }

            }, 600);

            setTimeout(() => {
                this.magicBladeStatus = false;
                this.currentImage = 0;
            }, 700);
        }
    }

}


