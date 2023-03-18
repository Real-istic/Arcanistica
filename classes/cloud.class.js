class Cloud extends MovableObject {
    y = -200;
    width = 720;
    height = 480;
    

    constructor() {
        super().loadImage('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png')
        
        this.x = Math.random() * 500;
        this.animate();
    }

    animate() {
        this.moveLeft();
    }
}