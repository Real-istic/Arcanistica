class Cloud extends MovableObject {
    y = -200;
    width = 720;
    height = 480;
    

    constructor(path, x) {
        super().loadImage(path, x)
        this.x = x + Math.random() * 10;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}