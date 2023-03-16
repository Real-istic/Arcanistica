class Cloud extends MovableObject {
    y = -200;
    width = 500;
    height = 700;
    

    constructor() {
        super().loadImage('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png')
        
        this.x = -100 + Math.random() * 500;
    }
}