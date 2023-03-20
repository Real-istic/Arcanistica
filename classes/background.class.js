class Background extends MovableObject {
x;
width = 3851 * 1.5
height = 530 * 1.5

    constructor(path, x) {
        super().loadImage(path);
        this.y = -305
        this.x = x -150;
    }
}