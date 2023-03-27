class StatusbarMP extends DrawableObject {


    STATUSBAR_MP = 'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/magic_full_bar.png';

    constructor() {
        super();
        this.loadImage(this.STATUSBAR_MP);
        this.x = 30;
        this.y = 57;
        this.width = 79;
        this.height = 20;
    }
}