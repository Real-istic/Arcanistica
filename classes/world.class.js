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
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background_withoutClouds_pale.png'),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground3a.png'),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground2.png'),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Arcanistica Ground1.png')
    ];
    canvas;
    ctx;

    constructor(canvas) {
        // canvas.width=900;
        // canvas.height=480;
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addObjectsToMap(this.backgrounds);
        this.addObjectsToMap(this.clouds);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);

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
        // spiegelverkehrtes Rendering des Goblins
        if (mo instanceof Goblin) {
            this.ctx.save();
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(mo.img, -mo.x - mo.width, mo.y, mo.width, mo.height);
            this.ctx.restore();
        } else {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }
}