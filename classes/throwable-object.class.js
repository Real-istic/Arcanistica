class ThrowableObject extends MovableObject {

    throw(projectileOffset, speed) {
        // this.speedY = 0.12;
        // this.applyGravity();

        if (this instanceof MagicBladeProjectile) {
            if (this.otherDirection) {
                this.x += projectileOffset + 350
                setInterval(() => {
                    this.x -= speed;
                }, 50);
            } else {
                this.x -= projectileOffset
                setInterval(() => {
                    this.x += speed;
                }, 50);
            }
        } else {
            if (this.otherDirection) {
                this.x -= projectileOffset
                setInterval(() => {
                    this.x -= speed;
                }, 50);
            } else {
                setInterval(() => {
                    this.x += speed;
                }, 50);
            }
        }
    }



    async deleteProjectile() {
        await new Promise(resolve => setTimeout(resolve, 300));
        let projectileIndex = world.throwableObjects.indexOf(this);

        if (projectileIndex >= 0) {
            world.throwableObjects.splice(projectileIndex, 1);
        }
    }

    animate() {

        setInterval(() => {
            this.playAnimation(images);
        }, 50);
    }
}