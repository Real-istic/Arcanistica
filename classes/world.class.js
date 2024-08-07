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
     * checks the world for collisions between objects and calls the collision handling functions
     * 
     */
    checkCollisions() {
        this.enemyCollisionHandling();
        this.endbossProjectileSplashSoundHandling();
        this.collectableObjectsHandling();
    }

    /**
     * handles the collisions between the character and the enemies and sets the dmgoutput to them 
     */
    enemyCollisionHandling() {
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
    }

    /**
     * handles the splashsounds of the endboss projectiles that hits the character
     */
    endbossProjectileSplashSoundHandling() {
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
    }

    /**
     * checks the world for collisions between the character and collectable objects
     */
    collectableObjectsHandling() {
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
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.collectableObjects);
        this.drawFixedObjects();
        this.ensureSmoothPerformance();
    }

    /**
     * ensures a smooth performance of the game
     */
    ensureSmoothPerformance() {
        let self = this;
        setTimeout(() => {
            requestAnimationFrame(function () {
                self.draw();
            });
        }, 1000 / 60);
    }

    /**
     * draws the fixed objects on the canvas
     */
    drawFixedObjects() {
        this.ctx.translate(-this.camera_x, 0);
        this.addObjectsToMap(this.ui.statusbars);
        this.addObjectsToMap(this.ui.icons);
        this.addObjectsToMap(this.ui.frames);
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
        let mirroredObject = (mo instanceof Goblin || mo instanceof Medusa || mo instanceof MagicBladeProjectile || mo instanceof FirecircleProjectile) && !mo.otherDirection
        let mirroredObjectNotCentered = (mo instanceof Endboss && !mo.otherDirection) || (mo instanceof Character && mo.otherDirection) || (mo instanceof Fireball && mo.otherDirection)

        // mirror rendering if necessary
        if (mirroredObject) {
            mo.drawMirroredObjects(this.ctx)

        } else if (mirroredObjectNotCentered) {
            // mirror rendering for not centered objects
            mo.drawMirroredObjectsNotCentered(this.ctx)

        } else {
            // normal rendering
            mo.drawObjects(this.ctx)
        }
    }
}