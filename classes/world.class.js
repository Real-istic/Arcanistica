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
    backgroundObjects = [
        new BackgroundObject('assets/pixel-art-forest-platformer-tileset/Ground/ground1.png')
    ];
    canvas;
    ctx;
    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.draw();
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.addToMap(this.character);

        this.enemies.forEach(enemy => {
            this.addToMap(enemy);
        });


        this.clouds.forEach(cloud => {
            this.addToMap(cloud);
        });

        // Draw() wird immer wieder aufgerufen
        let self = this;
        requestAnimationFrame(function () {
            self.draw();
        });
    }

    addToMap(mo) {
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.height, mo.width);
    }
}