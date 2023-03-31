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

    IMAGES_DEATH = [
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death1.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death2.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death3.png',
        'assets/pixel-art-monster-enemy-game-sprites/PNG/goblin/death4.png',
    ]

    offset = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
    
    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.loadImages(this.IMAGES_DEATH)
        this.x = 550 + Math.random() * 2500;
        this.speed = 0.25 + Math.random() * 0.75;

        this.animate();
    }

    animate() {
       
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            
            console.log('goblin HP:', this.HP)
            if (this.isDead()) {
                this.playAnimationOnce(this.IMAGES_DEATH);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 200);
    }
}
