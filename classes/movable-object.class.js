class MovableObject {
    x = 220;
    y = 100;
    height = 11110;
    width = 11250;
    img;
    

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('move right')
    }

    moveLeft() {
        
    }
}
