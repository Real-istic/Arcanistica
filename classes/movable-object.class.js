class MovableObject extends DrawableObject {
    yGround = 260;
    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    acceleration = 0.15;
    lastHit = 0;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY >= 0) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            } else {
                // this.y = this.yGround;
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
        this.world.level.backgrounds[0].x += this.speed / 20;
        this.world.level.backgrounds[1].x += this.speed / 15;
        // this.walking_sound.play();
    }

    moveLeft() {
        this.x -= this.speed;
        this.otherDirection = true;
        this.world.level.backgrounds[0].x -= this.speed / 20;
        this.world.level.backgrounds[1].x -= this.speed / 15;
        // this.walking_sound.play();
    }

    playAnimation(images) {
            let i = this.currentImage % images.length;
            let path = images[i];
            this.img = this.imageCache[path];
            this.currentImage++;
    }

    jump() {
        this.speedY = 8;
    }

    

    isColliding(mo) {
        if (mo instanceof Endboss) {
            return this.x + this.width - 25 >= mo.x + 30 &&
                this.y + this.height - 90 >= mo.y + 50 &&
                this.x + 50 < mo.x + 35 &&
                this.y < mo.y + mo.height
        } else {
            return this.x + this.width - 25 >= mo.x &&
                this.y + this.height - 90 >= mo.y &&
                this.x + 50 < mo.x &&
                this.y < mo.y + mo.height
        }
    }

    isHit() {
        this.HP -= 0.2;
        world.statusbarHP.setHPbarWidth(this.HP)
        if (this.HP <= 0) {
            this.HP = 0
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead() {
        return this.HP == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit
        timepassed = timepassed / 1000
        // console.log('timepassed = ', timepassed)
        return timepassed < 0.5;
    }
}

