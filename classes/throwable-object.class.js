class ThrowableObject extends MovableObject {

    /**
     * determines the mechanics of the throwable object
     * 
     * @param {*} projectileOffsetX translates the spawn-position
     * @param {*} speed speed of the projectile
     */
    throw(projectileOffsetX, speed) {

        if (this instanceof MagicBladeProjectile || this instanceof FirecircleProjectile) {
            if (this.otherDirection) {
                this.x += projectileOffsetX + 350
                setInterval(() => {
                    this.x += speed;
                    if (this instanceof FirecircleProjectile) {
                        this.applyFireCircleGravity()
                    }
                }, 50);
            } else if (!this.otherDirection){
                this.x -= projectileOffsetX
                setInterval(() => {
                    this.x -= speed;
                    if (this instanceof FirecircleProjectile) {
                        this.applyFireCircleGravity()
                    }
                }, 50);
            }
            
        } else {
            if (this.otherDirection) {
                this.x -= projectileOffsetX
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


    /**
     * deletes the projectile after a certain time
     * 
     * @param {*} timeout delay before the projectile gets deleted
     */
    async deleteProjectile(timeout) {
        await new Promise(resolve => setTimeout(resolve, timeout));
        let projectileIndex = world.throwableObjects.indexOf(this);

        if (projectileIndex >= 0) {
            world.throwableObjects.splice(projectileIndex, 1);
        }
    }

    /**
     * animates the projectile
     */
    animate() {
        setInterval(() => {
            this.playAnimation();
        }, 50);
    }
}