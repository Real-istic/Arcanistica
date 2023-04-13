class Firewall extends ThrowableObject {
    dpf = 0.02 + Math.random() * 0.02;
    offset = {
        top: 0,
        bottom: 0,
        left: 60,
        right: 50
    }
    projectileOffsetX = 0;
    speed = 0;
    range = 1800;
    hitdelay = false
    clearProjectileTime = 3000;


    IMAGES_FIREWALL = [
        'assets/pixel-art-magic-sprite-effects-and-icons-pack/PNG/Firewall/Firewall1.png',
        'assets/pixel-art-magic-sprite-effects-and-icons-pack/PNG/Firewall/Firewall2.png',
        'assets/pixel-art-magic-sprite-effects-and-icons-pack/PNG/Firewall/Firewall3.png',
        'assets/pixel-art-magic-sprite-effects-and-icons-pack/PNG/Firewall/Firewall4.png',

    ]


    constructor(x, y, otherDirection) {
        super().loadImage(this.IMAGES_FIREWALL[0]);
        this.loadImages(this.IMAGES_FIREWALL);
        this.animate();
        this.x = x;
        this.y = y;
        this.otherDirection = otherDirection;
        this.width = 196;
        this.height = 64;
        this.throw(this.projectileOffsetX, this.speed);

    }

    animate() {

        setInterval(() => {
            this.deleteProjectile(this.clearProjectileTime);
        }, 50);

        setInterval(() => {
            this.playAnimation(this.IMAGES_FIREWALL);
        }, 100);
    }
}