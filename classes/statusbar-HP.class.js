class StatusbarHP extends DrawableObject {

    STATUSBAR_HP = 'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full.png';
    // STATUSBAR_MP = 'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/magic_full_bar.png';

    constructor() {
        super();
        this.loadImage(this.STATUSBAR_HP);
        // this.loadImage(this.STATUSBAR_MP);
        this.x = 30;
        this.y = 20;
        this.width = 100;
        this.height = 20;
    }

    setHPbarWidth(HP) {
        this.width = HP;
    }
}