class ManaCrystal extends CollectableObject {
    MPgain = 8;
    MPgainBonus = 25;
    speedY = 8;
    speedX = 1 + this.getRndInteger(3, 7);
    acceleration = 0.3;
    accelerationX = 0.001;
    yGround = this.getRndInteger(140, 360)
    enemy;
    offset = {
        top: -50,
        bottom: 60,
        left: 60,
        right: -220
    }

    IMAGES = [
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal1.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal2.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal3.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal4.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal5.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal6.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal7.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal8.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal9.png',
        'assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
    ]

    constructor(enemy) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = enemy.x;
        this.y = enemy.y + enemy.offset.top;
        this.width = 50;
        this.height = 50;
        this.enemy = enemy;
        this.animate();
        this.applyGravityToCollectable();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 200);
    }

    gatherManaCrystal(character) {
        	let crystal = world.collectableObjects.indexOf(this);

            if (character.MP + this.MPgain > character.maxMP) {
                character.MP = character.maxMP;
            } else if (character.MP + this.MPgain < character.maxMP) {
                if (this.enemy.isFinallyDead && (character.MP + this.MPgain + this.MPgainBonus < character.maxMP)) {
                character.MP += this.MPgain + this.MPgainBonus;   
                } else {
                character.MP += this.MPgain;
                }
            }
            world.collectableObjects.splice(crystal, 1);
    }

}