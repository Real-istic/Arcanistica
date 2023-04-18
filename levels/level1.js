const level1 = new Level(

    [
        new Endboss(),
        new Goblin(), 
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Medusa(),
        new Medusa()
    ],

    [
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 50),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 2),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 4),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 6),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 8),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 10),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 12),
        new Cloud('./assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds-small.png', 500 * 14)
    ],

    [
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background2.png', -230),
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background1.png', -400),
        new Background('./assets/pixel-art-forest-platformer-tileset/Background/Modded/background3.png', -100),
    ]
)