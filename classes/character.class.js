class Character extends MovableObject {
x = 50;
y = 260;
width = 164
height = 164
IMAGES_WALKING = [
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png',
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk2.png',
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk3.png',
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk4.png',
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk5.png',
    'assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk6.png'
]

    constructor() {
        super().loadImage('assets/pixel-art-characters-for-platformer-games/PNG/Mage/Walk/walk1.png')
        this.loadImages(this.IMAGES_WALKING)

        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.IMAGES_WALKING.length;
            let path = this.IMAGES_WALKING[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 100);
    }

    moveRight() {

    }

    jump() {

    }
}