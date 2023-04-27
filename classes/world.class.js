class World {
    character;
    level;
    canvas;
    ctx;
    keyboard;
    camera_x;
    ui = uiElements;
    throwableObjects = [];
    collectableObjects = [];

    constructor(canvas, keyboard) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.keyboard = keyboard;
        this.initialize();
    }

    /**
     * initializes the character, level and draw function
     */
    async initialize() {
        this.character = await this.loadCharacter();
        this.level = await this.loadLevel1();
        this.draw();
    }

    /**
     * 
     * @returns the level1
     */
    async loadLevel1() {
        return level1;
    }

    /**
     * 
     * @returns the character
     */
    async loadCharacter() {
        return new Character();
    }
    
    /**
     * checks the world for collisions between objects and sets the dmgoutput to the objects
     * 
     */
    checkCollisions() {
        // important collisions
        this.level.enemies.forEach((enemy) => {

            if (this.character.isColliding(enemy)) {
                if (!enemy.isFinallyDead && !(enemy instanceof Medusa) && !this.character.isAboveGround()) {
                    this.character.isHit(enemy.dpf);
                }
            }
            this.throwableObjects.forEach((object) => {
                if (enemy.isColliding(object) && !enemy.isFinallyDead) {
                    enemy.isHit(object.dpf);
                    if (object instanceof Fireball) {
                        if (!isMuted) enemy.sound_hitByFireball.play();
                    }
                }
            });
        })

        // different hitsounds if the endboss projectiles hits the character
        this.throwableObjects.forEach((object) => {
            if (this.character.isColliding(object)) {
                this.character.isHit(object.dpf);
                if (object instanceof FirecircleProjectile) {
                    if (!isMuted) this.character.sound_hitByFirecircle.play();
                }
                if (object instanceof MagicBladeProjectile) {
                    if (!isMuted) this.character.sound_hitByMagicBlade.play();
                }
            }
        })

        // for gathering collectable objects
        this.collectableObjects.forEach((object) => {
            if (object.isColliding(this.character) && (object instanceof ManaCrystal)) {
                object.gatherManaCrystal(this.character);
            } else if (object.isColliding(this.character) && object instanceof HealthPotion) {
                object.gatherHealthPotion(this.character);
            }
        })
    }

    /**
     * draws everything on the canvas and calls itself again
     */
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
        this.addObjectsToMap(this.ui.icons);
        this.addObjectsToMap(this.ui.frames);

        // --- space for fixed objects above 

        let self = this;
        // Performance? -> check
        setTimeout(() => {
            requestAnimationFrame(function () {
                self.draw();
            });
        }, 1000 / 60);
    }

    /**
     * adds an object to the map
     * 
     * @param {*} objects // the objects
     */
    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    /**
     * the final add to map function which draws the objects on the canvas and checks for assets (and non centered assets) that has to be drawn mirrored or not
     * 
     * @param {*} mo // movable object
     */
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