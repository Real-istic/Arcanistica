class Level {
    enemies;
    clouds;
    backgrounds;
    level_end_x = 4470;

    constructor(enemies, clouds, backgrounds){
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgrounds = backgrounds;
    }
}