class Background extends MovableObject {

    /**
     * 
     * @param {*} path /* imagepath
     * @param {*} x /* x-Position
     */
    constructor(path, x) {
        super().loadImage(path);
        this.y = -305
        this.x = x - 150;
        this.width = 3851 * 1.5
        this.height = 530 * 1.5
    }
}