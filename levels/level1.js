const level1 = new Level(

    [
        new Goblin(),
        new Goblin(),
        new Goblin(),
        new Endboss()
    ],

    [
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 40),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 2),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 4),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 6),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 8),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 10),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 12),
        new Cloud('assets/pixel-art-forest-platformer-tileset/Background/Bright/clouds_small.png', 400 * 14)
    ],

    [
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background1.png', -200),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background2.png', -130),
        new Background('assets/pixel-art-forest-platformer-tileset/Background/Modded/Background3.png', 0),
    ]
)