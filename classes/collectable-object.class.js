class CollectableObject extends MovableObject {

    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    applyGravityToCollectable() {
        setInterval(() => {

            if ((this.isAboveGround() || this.speedY > 0) && !this.enemy.otherDirection) {
                this.y -= this.speedY
                this.x -= this.speedX
                this.speedY -= this.acceleration;
                this.speedX += this.accelerationX;
            } else if ((this.isAboveGround() || this.speedY > 0) && this.enemy.otherDirection) {
                this.y -= this.speedY
                this.x += this.speedX
                this.speedY -= this.acceleration;
                this.speedX -= this.accelerationX;
            } else {
                this.y = this.yGround;
            }
        }, 1000 / 100);
    }
}