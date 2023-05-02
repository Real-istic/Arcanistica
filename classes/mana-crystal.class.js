class ManaCrystal extends CollectableObject {
    MPgain = 15;
    MPgainBonus = 25;
    speedY = 8;
    speedX = 1 + this.getRndInteger(3, 7);
    acceleration = 0.3;
    accelerationX = 0.001;
    yGround = this.getRndInteger(360, 140)
    enemy;
    offset = {
        top: -50,
        bottom: 60,
        left: 60,
        right: -220
    }
    sound_drop = new Audio('./audio/drop_crystal.mp3');
    sound_collect = new Audio('./audio/collect_crystal.mp3');


    IMAGES = [
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal1.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal2.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal3.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal4.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal5.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal6.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal7.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal8.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal9.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
        './assets/castle-platformer-pixel-art-tileset/PNG/Items/crystal10.png',
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
        if (!isMuted) this.sound_drop.play();
    }
    /**
     * animates the mana crystal
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES);
        }, 150);
    }

    /**
     * determines how much mana the character gains
     * 
     * @param {*} character the character
     */
    gatherManaCrystal(character) {
        let potionIndex = world.collectableObjects.indexOf(this);
        let potentialMPGain = this.enemy?.isFinallyDead ? this.MPgain + this.MPgainBonus : this.MPgain;
        let potentialMPAfterGain = character.MP + potentialMPGain;
    
        if (potentialMPAfterGain >= character.maxMP) {
            character.MP = character.maxMP;
        } else {
            character.MP += potentialMPGain;
        }
        if (!isMuted) this.sound_collect.play();
        world.collectableObjects.splice(potionIndex, 1);
    }

}