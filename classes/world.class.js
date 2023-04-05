class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    ui = uiElements;
    throwableObjects = [];

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
                if (!enemy.isFinallyDead) {
                    this.character.isHit(enemy.dpf);
                }
            }
            this.throwableObjects.forEach((Fireball) => {
                if (enemy.isColliding(Fireball) && !enemy.isFinallyDead) {
                    enemy.isHit(Fireball.dpf);
                }
            });
        })

    }

    // Draw() wird immer wieder aufgerufen
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camera_x, 0);
        this.addObjectsToMap(this.level.backgrounds);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.ctx.translate(-this.camera_x, 0);

        // --- space for fixed objects below 

        this.addObjectsToMap(this.ui.statusbars);

        // --- space for fixed objects above 
        this.ctx.translate(this.camera_x, 0);
        this.addToMap(this.character);
        this.ctx.translate(-this.camera_x, 0);


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
        if (mo instanceof Goblin && !mo.otherDirection) {
            mo.drawMirroredObjects(this.ctx)

        } else if (mo instanceof Endboss && !mo.otherDirection || (mo instanceof Character && mo.otherDirection) || (mo instanceof ThrowableObject && mo.otherDirection)) {
            // mirror rendering for not centered objects
            mo.drawMirroredObjectsNotCentered(this.ctx)

        } else {
            // normal rendering
            mo.drawObjects(this.ctx)
        }
    }
}