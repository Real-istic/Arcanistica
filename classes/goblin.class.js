class Goblin extends MovableObject {

    y = 290;
    width = 164;
    height = 164;
    IMAGES_WALKING = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk3.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk4.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk5.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/walk6.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.x = 350 + Math.random() * 500;
        this.speed = 0.25 + Math.random() * 0.75;

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 120);
    }
}
