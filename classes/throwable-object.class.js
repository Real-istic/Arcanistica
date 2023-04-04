class ThrowableObject extends MovableObject {

    throw() {
        // this.speedY = 0.12;
        // this.applyGravity();
        if (this.otherDirection) {
            this.x -= 130
            setInterval(() => {
                this.x -= 15;
            }, 50);
        } else {
            setInterval(() => {
                this.x += 15;
            }, 50);
        }
    }

    animate() {

        setInterval(() => {
            this.playAnimation(images);
        }, 50);
    }
}