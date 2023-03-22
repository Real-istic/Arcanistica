class MovableObject {
    x = 120;
    y = 260;
    yGround = 260;
    width = 250;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    acceleration = 0.15;

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
        this.speedY = 6;
    }

    drawMirroredObjects(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 0, 0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    drawMirroredObjectsNotCentered(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 82, -0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    drawObjects(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        this.drawFrame(ctx)
    }

    drawMirroredFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'blue';
        ctx.rect(-this.x - this.width, this.y, this.width, this.height);
        ctx.stroke();
    }

    drawFrame(ctx) {
        if (this instanceof Goblin || this instanceof Character || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }

    isColliding (mo) {
        return  this.x + this.width >= mo.x && 
                this.y + this.height >= mo.y &&
                this.x < mo.x &&
                this.y < mo.y + mo.height
             // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
}
}



// isColliding (mo) {
//     return  (this.X + this.width) >= mo.X && this.X <= (mo.X + mo.width) && 
//             (this.Y + this.offsetY + this.height) >= mo.Y &&
//             (this.Y + this.offsetY) <= (mo.Y + mo.height) && 
//             mo.onCollisionCourse; // Optional: hiermit könnten wir schauen, ob ein Objekt sich in die richtige Richtung bewegt. Nur dann kollidieren wir. Nützlich bei Gegenständen, auf denen man stehen kann.
// }