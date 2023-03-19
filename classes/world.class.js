class World {
    character = new Character();
    enemies = [
        new Goblin(),
        new Goblin(),
        new Goblin(),
    ];
    clouds = [
        new Cloud()
    ];
    backgrounds = [
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background_withoutClouds_pale.png', 0),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground3a.png', 0),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground2.png', 0),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground1.png', 0),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background_withoutClouds_pale.png', 1520 * 1.5),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground3a.png', 1520 * 1.5),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground2.png', 1520 * 1.5),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground1.png', 1520 * 1.5)
    ];
    canvas;
    ctx;
    keyboard;
    camera_x;

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

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addObjectsToMap(this.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0);

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        });
    }

    addToMap(mo) {
        // spiegelverkehrtes Rendering des Goblins und Characters
        if (mo instanceof Goblin) {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.translate(mo.img.width - 0, 0)
            this.ctx.drawImage(mo.img, -mo.x -mo.width, mo.y, mo.width, mo.height);
            this.ctx.restore();
        } else if ((mo instanceof Character && mo.otherDirection)) {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.translate(mo.img.width - 64, 0)
            this.ctx.drawImage(mo.img, -mo.x -mo.width, mo.y, mo.width, mo.height);
            this.ctx.restore();
        } else {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }

    flipImage(mo) {

    }

}