class Firewall extends ThrowableObject {
    dpf = 0.015 + Math.random() * 0.005;
    offset = {
        top: 0,
        bottom: 0,
        left: 230,
        right: 20
    }
    projectileOffsetX = 0;
    speed = 0;
    range = 1800;
    hitdelay = false
    clearProjectileTime = 3000;
    sound_hitByFirewall = new Audio('audio/hit_by_firewall.mp3');
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
        if (!isMuted) this.sound_hitByFirewall.play();
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