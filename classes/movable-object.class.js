class MovableObject {
    x = 120;
    y = 190;
    width = 250;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;
    speed = 0.15;


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
        console.log('move right')
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 50);
    }
}