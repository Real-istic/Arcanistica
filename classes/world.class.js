class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    ui = uiElements;
    throwableObjects = [];
    collectableObjects = [];

    constructor(canvas, keyboard) {
        // canvas.width=900;
        // canvas.height=480;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
    }

    setWorld() {
        this.character.world = this;
    }


    checkCollisions() {
        this.level.enemies.forEach((enemy) => {
            // console.log('enemy is hit status', enemy.isHurt())

            if (this.character.isColliding(enemy)) {
                // console.log('HP = ', this.character.HP)
                if (!enemy.isFinallyDead && !(enemy instanceof Medusa) && !this.character.isAboveGround()) {
                    this.character.isHit(enemy.dpf);
                }
            }
            this.throwableObjects.forEach((object) => {
                if (enemy.isColliding(object) && !enemy.isFinallyDead) {
                    enemy.isHit(object.dpf);
                    if (object instanceof Fireball) {
                        enemy.sound_hitByFireball.play();
                    }
                }
            });
        })
        this.throwableObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
                this.character.isHit(object.dpf);
            }
         
        })
        this.collectableObjects.forEach((object) => {
            if (object.isColliding(this.character) && (object instanceof ManaCrystal)) {
                object.gatherManaCrystal(this.character);
            } else if (object.isColliding(this.character) && object instanceof HealthPotion) {
                object.gatherHealthPotion(this.character);
            }
        })

    }

    // Draw() wird immer wieder aufgerufen
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);

        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.collectableObjects);
        this.ctx.translate(-this.camera_x, 0);

        // --- space for fixed objects below 

        this.addObjectsToMap(this.ui.statusbars);

        // this.ctx.font = '24px Sans-Serif';
        // this.ctx.fillStyle = 'white';
        // this.ctx.fillText(`HP`, 140, 49);
        // this.ctx.fillText(`MP`, 140, 78);

        // --- space for fixed objects above 

        let self = this;

        // Performance? -> check
        setTimeout(() => {
            requestAnimationFrame(function () {
                self.draw();
            });
        }, 1000 / 60);
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }


    addToMap(mo) {
        this.checkCollisions()

        // mirror rendering if necessary
        if ((mo instanceof Goblin || mo instanceof Medusa || mo instanceof MagicBladeProjectile || mo instanceof FirecircleProjectile) && !mo.otherDirection) {
            mo.drawMirroredObjects(this.ctx)

        } else if ((mo instanceof Endboss && !mo.otherDirection) || (mo instanceof Character && mo.otherDirection) || (mo instanceof Fireball && mo.otherDirection)) {
            // mirror rendering for not centered objects
            mo.drawMirroredObjectsNotCentered(this.ctx)

        } else {
            // normal rendering
            mo.drawObjects(this.ctx)
        }
    }
}