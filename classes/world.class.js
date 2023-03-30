class World {
    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x;
    ui = uiElements;
    throwableObjects = [new ThrowableObject()];

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
            if (this.character.isColliding(enemy)) {
                // console.log('HP = ', this.character.HP)
                if (enemy instanceof Endboss) {
                    this.character.isHit(0.06);
                } else {
                    this.character.isHit(0.03);
                }
            }
        })
    }

    checkThrowObjects() {
        if (this.character.fireballCooldown <= 0) {
            this.character.fireballCooldown = 0
        }
        this.character.fireballCooldown -= 20;
        if (this.keyboard.arrowRight && this.character.fireballCooldown <= 0) {
            let fireball = new ThrowableObject(this.character.x + 50, this.character.y + 10);
            this.throwableObjects.push(fireball);
            this.character.fireballCooldown = 1000;
        }
        // console.log('fireball cooldown', this.character.fireballCooldown)
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
            this.checkThrowObjects();
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
        if (mo instanceof Goblin) {
            mo.drawMirroredObjects(this.ctx)
        } else if (mo instanceof Endboss || (mo instanceof Character && mo.otherDirection)) {
            mo.drawMirroredObjectsNotCentered(this.ctx)
        } else {
            mo.drawObjects(this.ctx)
        }

    }
}