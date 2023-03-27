class Ui extends DrawableObject {

constructor(path, x, y, width, height) {
    super();
    this.loadImage(path);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}