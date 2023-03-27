class StatusbarBackground extends DrawableObject {


    STATUSBAR_Background = 'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/statusbar_background2.png';

    constructor() {
        super();
        this.loadImage(this.STATUSBAR_Background);
        this.x = 26;
        this.y = 15;
        this.width = 108;
        this.height = 66;
    }
}