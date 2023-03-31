class Endboss extends MovableObject {
    y = 110;
    width = 364;
    height = 364;
    IMAGES_WALKING = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk6.png',
    ]
    offset = {
        top: 85,
        bottom: 0,
        left: 80,
        right: 75 
    }


    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.speed = 0.25;
        this.x = 4200;
        this.animate();
    }

    animate() {
        
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING);
        }, 300);
    }
}


