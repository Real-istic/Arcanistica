class MovableObject {
    x = 120;
    y = 250;
    width = 250;
    height = 250;
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
