class DrawableObject {
    x = 120;
    y = 260;
    width = 250;
    height = 250;
    img;
    imageCache = {};
    currentImage = 0;

    /**
     * adapts the HPbar width to the current HP
     * 
     * @param {*} HP // health points
     */
    setHPbarWidth(HP) {
        world.ui.statusbars[2].width = HP;
    }

    /**
     * adapts the MPbar width to the current MP
     * 
     * @param {*} MP // mana points
     */
    setMPbarWidth(MP) {
        world.ui.statusbars[3].width = MP;
    }

    /**
     * loads an image
     * 
     * @param {*} path // path to the image
     */
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    /**
     * loads an array of images
     * 
     * @param {*} arr // array of paths to images
     */
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * draws an object to the canvas
     * 
     * @param {*} ctx // canvas context
     */
    drawObjects(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height)
        // this.drawFrame(ctx)
    }

    /**
     * draws a mirrored object to the canvas
     * 
     * @param {*} ctx // canvas context
     */
    drawMirroredObjects(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 90, 0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        // this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    /**
     * draws a non centered mirrored object to the canvas
     * 
     * @param {*} ctx // canvas context
     */
    drawMirroredObjectsNotCentered(ctx) {
        ctx.save();
        ctx.scale(-1, 1);
        ctx.translate(this.img.width - 82, -0)
        ctx.drawImage(this.img, -this.x - this.width, this.y, this.width, this.height);
        // this.drawMirroredFrame(ctx);
        ctx.restore();
    }

    // /**
    //  * test frames for collision detection but without offsets
    //  * 
    //  * @param {*} ctx // canvas context
    //  */
    // drawMirroredFrame(ctx) {
    //     ctx.beginPath();
    //     ctx.lineWidth = '3';
    //     ctx.strokeStyle = 'blue';
    //     ctx.rect(-this.x - this.width, this.y, this.width, this.height);
    //     ctx.stroke();
    // }

    // drawFrame(ctx) {
    //     if (this instanceof Goblin || this instanceof Character || this instanceof Endboss) {
    //         ctx.beginPath();
    //         ctx.lineWidth = '3';
    //         ctx.strokeStyle = 'blue';
    //         ctx.rect(this.x, this.y, this.width, this.height);
    //         ctx.stroke();
    //     }
    // }

}