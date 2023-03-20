class MovableObject {
    x = 120;
    y = 240;
    yGround = 240;
    width = 250;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;
    otherDirection = false;
    speed = 0.15;
    speedY = 0;
    acceleration = 3;

    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround()) {
            this.y -= this.speedY
            this.speedY -= this.acceleration;
        }
        }, 1000 / 25);
    }

    isAboveGround(){
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
        setInterval(() => {
            this.x += this.speed;
        }, 1000 / 60);
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }
}
