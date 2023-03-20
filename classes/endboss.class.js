class Endboss extends MovableObject {

    y = 190;
    width = 264;
    height = 264;
    IMAGES_WALKING = [
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk1.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk2.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk3.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk4.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk5.png',
        'assets/bosses-pixel-art-game-assets-pack/PNG/Boss1/Walk6.png',
    ]

    constructor() {
        super().loadImage(this.IMAGES_WALKING[0])
        this.loadImages(this.IMAGES_WALKING)
        this.x = 550
        this.speed = 0.25

        this.animate();
    }

    animate() {
        this.moveLeft();
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }
}


