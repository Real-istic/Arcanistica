class ThrowableObject extends MovableObject {
    fireballCooldown = 1000;


    IMAGES_FIREBALL = [
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire1.png',
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire2.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire3.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire4.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire5.png',
        'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire6.png'
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire7.png',
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire8.png',
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire9.png',
        // 'assets/10-magic-effects-pixel-art-pack/PNG/fire/fire10.png',
    ];

    constructor(x, y) {
        super().loadImage(this.IMAGES_FIREBALL[0]);
        this.loadImages(this.IMAGES_FIREBALL);
        this.animate();
        this.x = x;
        this.y = y;
        this.width = 150;
        this.height = 150;
        this.throw();
    }


    throw() {
        // this.speedY = 0.12;
        // this.applyGravity();
        setInterval(() => {
            this.x += 15;
        }, 50);
    }



    animate() {

        setInterval(() => {
            this.playAnimation(this.IMAGES_FIREBALL);
        }, 50);
    }


}