class DrawableObject {
    x = 120;
    y = 260;
    width = 250;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;
    HP = 100;


    setHPbarWidth(HP) {
        world.ui.statusbars[2].width = HP;
    }

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    drawObjects(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        this.drawFrame(ctx)
    }

    drawMirroredObjects(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 0, 0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    drawMirroredObjectsNotCentered(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 82, -0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    drawMirroredFrame(ctx) {
        ctx.beginPath();
        ctx.lineWidth = '3';
        ctx.strokeStyle = 'blue';
        ctx.rect(-this.x - this.width, this.y, this.width, this.height);
        ctx.stroke();
    }

    drawFrame(ctx) {
        if (this instanceof Goblin || this instanceof Character || this instanceof Endboss) {
            ctx.beginPath();
            ctx.lineWidth = '3';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
    }


}