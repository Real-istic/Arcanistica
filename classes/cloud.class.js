class Cloud extends MovableObject {
    y = -200;
    width = 720;
    height = 480;

    /**
     * 
     * @param {*} path // path to the image
     * @param {*} x // x-position
     */
    constructor(path, x) {
        super().loadImage(path, x)
        this.x = x + Math.random() * 10;
        this.animate();
    }

    /**
     * cloud-movement
     */
    animate() {
        setInterval(() => {
            if (gameStarted) {
                this.x -= this.speed;
            }
        }, 1000 / 60);
    }
}