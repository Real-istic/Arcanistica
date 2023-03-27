class StatusBar extends DrawableObject {
    STATUS_BAR_IMAGES = [
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
        'assets/fantasy-platformer-game-ui/PNG/16Inner_Interface/hp_full_rounded.png',
    ]

    percentage = 100;

    constructor() {
        super();
        this.loadImage(this.STATUS_BAR_IMAGES)
        this.x = 100;
        this.y = 100;
        this.setPercentage(100)
    }

    setPercentage(percentage) {
        this.percentage = percentage;
        let imagePath = this.STATUS_BAR_IMAGES[this.setStatusBar()]
        this.img = this.imageCache[path];
    }

    setStatusBar() {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage < 80) {
            return 4;
        } else if (this.percentage < 60) {
            return 3;
        } else if (this.percentage < 40) {
            return 2;
        } else if (this.percentage < 20) {
            return 1;
        } else {
            return 0;
        }
    }
}