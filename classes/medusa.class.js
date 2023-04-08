class Medusa extends MovableObject {
    y = 250;
    width = 194;
    height = 194;
    dpf = 0.03;
    speed = 3.5;
    HP = 150;
    rockProjectileCooldown = 1600;
    resetRockProjectileCooldown = 1600

    IMAGES_WALK = [
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk1.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk2.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk3.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Walk4.png',
    ]

    IMAGES_DEATH = [
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death1.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death2.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death3.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death4.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Death6.png',
    ]

    IMAGES_HURT = [
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Hurt1.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Hurt2.png',
    ]

    IMAGES_ATTACK = [
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack1.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack1.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack2.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack2.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack3.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack3.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack4.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack4.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack6.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack5.png',
        'assets/rpg-monster-sprites-pixel-art/PNG/medusa/Attack6.png',
    ]

    offset = {
        top: 0,
        bottom: 0,
        left: 70,
        right: -150
    }
    
    constructor() {
        super().loadImage(this.IMAGES_WALK[0])
        this.loadImages(this.IMAGES_WALK)
        this.loadImages(this.IMAGES_DEATH)
        this.loadImages(this.IMAGES_HURT)
        this.loadImages(this.IMAGES_ATTACK)
        this.x = 450 + Math.random() * 2500;
        this.speed += Math.random() * 0.5;

        this.animate();
    }

    animate() {
       
        setInterval(() => {
            if (!this.isFinallyDead && this.x - world.character.x > 420 && !this.rockProjectileStatus) {
            this.x -= this.speed * 2;
            this.otherDirection = false;

            } else if (!this.isFinallyDead && this.x - world.character.x < 390 && !this.rockProjectileStatus) {
            this.x += this.speed;
            this.otherDirection = true;
            } else if ( this.x - world.character.x > 420) {
                this.otherDirection = false;
            }
        }, 1000 / 60);

        setInterval(() => {
            let medusaGetsHitByProjectile = world.throwableObjects.some(projectile => this.isColliding(projectile));

            // if (this.HP > 0) {
            // console.log('MedusaHP: ', this.HP)  
            // }

            if (this.isDead() && !this.isFinallyDead) {
                this.isFinallyDead = true;
                this.playAnimationOnce(this.IMAGES_DEATH);

            } else if (!this.isFinallyDead && world.character.isColliding(this) ) {
                this.playAnimation(this.IMAGES_ATTACK);

            } else if (medusaGetsHitByProjectile && !this.isFinallyDead) {
                this.playAnimation(this.IMAGES_HURT);
                
            } else if (!this.isFinallyDead && !this.rockProjectileStatus){
                this.playAnimation(this.IMAGES_WALK);
            }
        }, 150);

        setInterval(() => {
            this.rockProjectileCooldown -= 50;

            let characterIsAtHighRange = this.x - world.character.x > 350;
            
            if (this.rockProjectileCooldown <= 0) {
                this.rockProjectileCooldown = 0;
            }
            if (this.rockProjectileCooldown <= 0 && !this.rockProjectileStatus && !this.isFinallyDead && characterIsAtHighRange && !this.otherDirection && !this.rockProjectileStatus) {
                this.throwRockProjectile();
            }
        }, 100);

    }
    
    async throwRockProjectile() {
        if (this.rockProjectileCooldown <= 0) {
            this.rockProjectileStatus = true;
            this.rockProjectileCooldown = this.resetRockProjectileCooldown;
            
            this.playAnimationOnce(this.IMAGES_ATTACK);

            let characterPositionX = world.character.x;
            let characterPositionY = world.character.y;
            
            setTimeout(() => {
                if (this.otherDirection) {
                    let rockProjectile = new RockProjectile(characterPositionX - 10, characterPositionY - 50, this.otherDirection);
                    world.throwableObjects.push(rockProjectile);

                } else {
                    let rockProjectile = new RockProjectile(characterPositionX - 80, characterPositionY - 50, this.otherDirection);
                    world.throwableObjects.push(rockProjectile);
                }

            }, 100);

            setTimeout(() => {
                this.rockProjectileStatus = false;
                this.currentImage = 0;
            }, 2000);
        }
    }


}
