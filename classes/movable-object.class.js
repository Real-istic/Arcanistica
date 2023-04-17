class MovableObject extends DrawableObject {
    yGround = 260;
    speed = 0.15;
    speedY = 0;
    acceleration = 0.15;
    lastHit = 0;
    otherDirection = false;
    isFinallyDead = false;
    dpf = 0.5; // damage per frame
    HP = 100;
    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
    aggroRange = 800;
    sound_hitByFireball = new Audio('./audio/hit_by_fireball.mp3');
    sound_hitByFirecircle = new Audio('./audio/hit_by_firecircle.mp3');
    sound_hitByMagicBlade = new Audio('./audio/hit_by_magic_blade_projectile.mp3');


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            } else {
                this.y = this.yGround;
            } 
        }, 1000 / 100);
    }

    isAboveGround() {
        return (this.y < this.yGround);
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight() {
        this.x += this.speed;
        this.otherDirection = false;
        this.world.level.backgrounds[0].x += this.speed / 18;
        this.world.level.backgrounds[1].x += this.speed / 13;
        // this.walking_sound.play();
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.world.level.backgrounds[0].x -= this.speed / 18;
        this.world.level.backgrounds[1].x -= this.speed / 13;
        // this.walking_sound.play();
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    async playAnimationOnce(images) {
        for (let i = 0; i < images.length; i++) {
            let path = images[i];
            this.img = this.imageCache[path];
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }

    jump() {
        this.speedY = 7;
    }

    isColliding(mo) {
        let enemyIsHitByEnemyProjectile = (this instanceof Goblin || this instanceof Medusa || this instanceof Endboss || this instanceof Medusa) && (mo instanceof MagicBladeProjectile || mo instanceof FirecircleProjectile || mo instanceof RockProjectile);
        
        if ((!mo.isFinallyDead || !this.isFinallyDead) && !enemyIsHitByEnemyProjectile) {
            return this.x + this.width - this.offset.right >= mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom >= mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom
        }
    }

    isHit(intensity) {

        this.HP -= intensity;
        if (this.HP <= 0) {
            this.HP = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.HP <= 0;
    }

    isHurt() {
        let timepassed = (new Date().getTime() - this.lastHit) / 1000
        // console.log('timepassed = ', timepassed)

        return timepassed < 0.2;

    }

    spawnManaCrystal(enemy) {
        world.collectableObjects.push(new ManaCrystal(enemy));
    }

    spawnHealthPotion(enemy) {
        world.collectableObjects.push(new HealthPotion(enemy));
    }
}

