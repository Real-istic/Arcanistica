class CollectableObject extends MovableObject {

    /**
     * used for the random y drop-coordinate
     * 
     * @param {*} min // minimum value
     * @param {*} max // maximum value
     * @returns the random Y-Coordinate for the collectable to drop from (in a specific range)
     */
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    /**
     * used for the x- and y-drop speed to make the collectables fall in a random way
     */
    applyGravityToCollectable() {
        setInterval(() => {
            {
                if ((this.isAboveGround() || this.speedY > 0) && !this.enemy.otherDirection) {
                    this.y -= this.speedY
                    this.reduceDropSpeedLeftMapSide();

                } else if ((this.isAboveGround() || this.speedY > 0) && this.enemy.otherDirection) {
                    this.y -= this.speedY
                    this.reduceDropSpeedRightMapSide();

                } else {
                    this.y = this.yGround;
                }
            }
        }, 1000 / 100);
    }

    /**
     * prevent the collectables from dropping out of the left hand side of the map, by reducing its X-Drop speed
     */
    reduceDropSpeedLeftMapSide() {
        this.x -= (world.character.x <= 300) ? (this.speedX / 3) : this.speedX;
        this.speedY -= this.acceleration;
        this.speedX += this.accelerationX;
    }

    /**
     * prevent the collectables from dropping out of the right hand side of the map, by reducing its X-Drop speed
     */
    reduceDropSpeedRightMapSide() {
        this.x += (world.character.x >= 3800) ? (this.speedX / 3) : this.speedX;
        this.speedY -= this.acceleration;
        this.speedX -= this.accelerationX;
    }

}