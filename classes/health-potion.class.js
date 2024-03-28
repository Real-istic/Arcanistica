class HealthPotion extends CollectableObject {
    HPgain = 20;
    HPgainBonus = 25;
    speedY = 8;
    speedX = 3 + this.getRndInteger(5, 9);
    acceleration = 0.3;
    accelerationX = 0.001;
    yGround = this.getRndInteger(140, 360)
    enemy;
    offset = {
        top: -50,
        bottom: 50,
        left: 60,
        right: -220
    }
    sound_drop = new Audio('./audio/drop_potion.mp3');
    sound_collect = new Audio('./audio/collect_potion.mp3');

    IMAGES = [
        './assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle1.png',
        './assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle2.png',
        './assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle3.png',
        './assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle4.png',
        './assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle5.png',
    ]

    constructor(enemy) {
        super().loadImage(this.IMAGES[0]);
        this.loadImages(this.IMAGES);
        this.x = enemy.x;
        this.y = enemy.y + enemy.offset.top;
        this.width = 40;
        this.height = 40;
        this.enemy = enemy;
        this.animate();
        this.applyGravityToCollectable();
        if (!isMuted) this.sound_drop.play();
    }

    /**
     * animate potion
     */
    animate() {
        setInterval(() => {
            this.playAnimationOnce(this.IMAGES);
        }, 1500);
    }

    /**
     * determines how much HP the character gains
     * 
     * @param {*} character the character
     */
    gatherHealthPotion(character) {
        let potionIndex = world.collectableObjects.indexOf(this);
        let potentialHPGain = this.enemy?.isFinallyDead ? this.HPgain + this.HPgainBonus : this.HPgain;
        let potentialHPAfterGain = character.HP + potentialHPGain;
    
        if (potentialHPAfterGain >= character.maxHP) {
            character.HP = character.maxHP;
        } else {
            character.HP += potentialHPGain;
        }
        if (!isMuted) this.sound_collect.play();
        world.collectableObjects.splice(potionIndex, 1);
    }
}