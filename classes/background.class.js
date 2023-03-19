class Background extends MovableObject {
x;
width = 1520 * 1.5
height = 480 * 1.5

    constructor(path, x) {
        super().loadImage(path);
        this.y = -240
        this.x = x -150;
    }
}