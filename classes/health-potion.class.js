class HealthPotion extends CollectableObject {
    HPgain = 8;
    HPgainBonus = 25;
    speedY = 8;
    speedX = 3 + this.getRndInteger(5, 9);
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
        'assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle1.png',
        'assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle2.png',
        'assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle3.png',
        'assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle4.png',
        'assets/dungeon-platformer-pixel-art-tileset/PNG/Items/bottle5.png',
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
    }

    animate() {
        setInterval(() => {
            this.playAnimationOnce(this.IMAGES);
        }, 1500);
    }

    gatherHealthPotion(character) {
        	let potion = world.collectableObjects.indexOf(this);

            if (character.HP + this.HPgain > character.maxHP) {
                character.HP = character.maxHP;
            } else if (character.HP + this.HPgain < character.maxHP) {
                if (this.enemy.isFinallyDead && (character.HP + this.HPgain + this.HPgainBonus < character.maxHP)) {
                character.HP += this.HPgain + this.HPgainBonus;   
                } else {
                character.HP += this.HPgain;
                }
            }
            world.collectableObjects.splice(potion, 1);
    }

}