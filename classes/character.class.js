class Character extends MovableObject {
    x = 50;
    y = 260;
    width = 164
    height = 164
    speed = 3
    IMAGES_WALKING = [
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
        'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
    ]
    world;


    constructor() {
        super().loadImage('assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png')
        this.loadImages(this.IMAGES_WALKING)

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                //walk animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                let path = this.IMAGES_WALKING[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 100);

        
        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 200;
        }, 1000 / 60);
    }

}