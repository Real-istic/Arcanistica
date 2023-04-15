class CollectableObject extends MovableObject {

    dropSwitch = false;

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    applyGravityToCollectable() {
        setInterval(() => {
            {
                if ((this.isAboveGround() || this.speedY > 0) && !this.enemy.otherDirection) {
                    this.y -= this.speedY
                    // (line below) prevent the collectables from dropping out of the left hand side of the map, by reducing its X-Drop speed
                    this.x -= (world.character.x <= 200) ? (this.speedX / 2) : this.speedX;
                    this.speedY -= this.acceleration;
                    this.speedX += this.accelerationX;
                } else if ((this.isAboveGround() || this.speedY > 0) && this.enemy.otherDirection) {
                    this.y -= this.speedY
                    // (line below) prevent the collectables from dropping out of the right hand side of the map, by reducing its X-Drop speed
                    this.x += (world.character.x >= 3900) ? (this.speedX / 2) : this.speedX;
                    this.speedY -= this.acceleration;
                    this.speedX -= this.accelerationX;
                } else {
                    this.y = this.yGround;
                }
            }
        }, 1000 / 100);
    }
}