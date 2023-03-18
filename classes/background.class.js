class Background extends MovableObject {
x = 0
width = 1520 * 1.5
height = 480 * 1.5

    constructor(path) {
        super().loadImage(path);
        this.y = -240
    }
}