class Endboss extends MovableObject {
    y = 110;
    width = 364;
    height = 364;
    dpf = 0.01;
    HP = 300;
    speed = 1.5;
    magicBladeCooldown = 0;
    resetMagicBladeCooldown = 1000;
    magicBladeStatus = false;
    firecircleCooldown = 0;
    resetFirecircleCooldown = 2000;
    firecircleStatus = false;

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

    IMAGES_ATTACK_FIRECIRCLE = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Magic_fire5.png',
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
        this.loadImages(this.IMAGES_ATTACK_FIRECIRCLE)
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

            let playerIsAtMidRange = this.x - world.character.x > 150 && this.x - world.character.x < 370 || this.x - world.character.x < -250 && this.x - world.character.x > -470;

            let playerIsAtHighRange = this.x - world.character.x > 380 && this.x - world.character.x < 1200 || this.x - world.character.x < -480 && this.x - world.character.x > -1300;

            this.firecircleCooldown -= 50;
            this.magicBladeCooldown -= 50;
            
            if (this.magicBladeCooldown <= 0) {
                this.magicBladeCooldown = 0;
            }
            if (this.firecircleCooldown <= 0) {
                this.firecircleCooldown = 0;
            }
            if (this.magicBladeCooldown <= 0 && !this.magicBladeStatus && !this.isFinallyDead && playerIsAtMidRange && !playerIsAtHighRange && !this.firecircleStatus) {
                this.throwMagicBlade();
            }
            if (this.firecircleCooldown <= 0 && !this.firecircleStatus && !this.isFinallyDead && !playerIsAtMidRange && playerIsAtHighRange) {
                this.throwFirecircle()
            }
        }, 100);

        setInterval(() => {

            if (this.HP > 0) {
                console.log('EndbossHP: ', this.HP)
            }

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);

            } else if ((world.throwableObjects.some(projectile => this.isColliding(projectile))) && !this.isFinallyDead && !this.magicBladeStatus) {
                this.playAnimation(this.IMAGES_HURT);
            }

            else if (!this.isFinallyDead && world.character.isColliding(this) && !this.magicBladeStatus && !this.firecircleStatus) {
                this.playAnimation(this.IMAGES_ATTACK);

            } else if (!this.isFinallyDead && !this.magicBladeStatus && !this.firecircleStatus) {
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
                    let magicBladeProjectile = new MagicBladeProjectile(this.x - 300, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(magicBladeProjectile);

                } else {
                    let magicBladeProjectile = new MagicBladeProjectile(this.x + 50, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(magicBladeProjectile);
                }

            }, 600); // delay to ensure that the magic blade is thrown after the animation

            setTimeout(() => {
                this.magicBladeStatus = false;
                this.currentImage = 0;
            }, 700); // delay to ensure that the animation is finished
        }
    }

    async throwFirecircle() {
        if (this.firecircleCooldown <= 0) {
            this.firecircleStatus = true;
            this.firecircleCooldown = this.resetFirecircleCooldown;
            this.playAnimationOnce(this.IMAGES_ATTACK_FIRECIRCLE);

            setTimeout(() => {
                if (this.otherDirection) {
                    let firecircleProjectile = new FirecircleProjectile(this.x - 300, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(firecircleProjectile);

                } else {
                    let firecircleProjectile = new FirecircleProjectile(this.x + 50, this.y + 60 + Math.random() * 100, this.otherDirection);
                    world.throwableObjects.push(firecircleProjectile);
                }

            }, 600); // delay to ensure that the Firecircle is thrown after the animation

            setTimeout(() => {
                this.firecircleStatus = false;
                this.currentImage = 0;
            }, 800); // delay to ensure that the animation is finished
        }
    }

}


