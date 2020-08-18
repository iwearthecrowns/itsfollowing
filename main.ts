function makeEnemies () {
    enemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . 1 . . . . . 1 . . . . . 
        . . . 1 1 1 f f f 1 3 1 . . . . 
        . . . f f f f f f 3 3 3 . . . . 
        . . f f f d d d d f 3 3 3 . . . 
        . . f f d d d d d d f 3 f . . . 
        . . f f d d d d d d d f f . . . 
        . . f d d f d d f d d d f . . . 
        . f f d d d d d d d d d f f . . 
        . f f d f d d d d f d d f f . . 
        . . d d d f f f f d d d d . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy2 = sprites.create(img`
        . . . . . . . . . e e e e e . . 
        . . . . 1 . . . e e 1 e e e e . 
        . . . 1 1 1 e e e 1 3 1 e e e . 
        . . . e e e e e e 3 3 3 e e e . 
        . . e e e d d d d e 3 3 3 e e e 
        . . e e d d d d d d e 3 e e e e 
        . . d d d d d d d d d d d . e e 
        . . d d d f d d f d d d d . e e 
        . . d d d d d d d d d d d . . . 
        . . d d f d d d d f d d d . . . 
        . . d d d f f f f d d d d . . . 
        . . . d d d d d d d d d . . . . 
        . . . . d d d d d d d . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemy.x += randint(-60, 60)
    enemy.y += randint(-40, 40)
    enemy2.x += randint(-60, 60)
    enemy2.y += randint(-40, 40)
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    enemy.x += randint(-2, 2)
    enemy.y += randint(-2, 2)
    enemy2.x += randint(-2, 2)
    enemy2.y += randint(-2, 2)
})
let followSprite: Sprite = null
let enemyList: Sprite[] = []
let enemy2: Sprite = null
let enemy: Sprite = null
scene.setBackgroundColor(11)
let player2 = sprites.create(img`
    . . . . . . . . . . . . . 2 2 . . . . . . . . . 
    . . . . f f f . . . . . 2 3 3 2 . f f f . . . . 
    . . . f 1 1 1 f f f f 2 3 3 3 3 2 1 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 2 3 3 3 2 2 2 1 1 f . . . 
    . . . f 1 1 1 1 1 1 1 2 3 3 2 3 3 3 2 2 2 . . . 
    . . . . f 1 1 1 1 1 1 1 2 2 2 3 3 3 2 3 3 2 . . 
    . . . f 1 1 1 1 1 1 1 1 1 1 1 2 2 2 3 3 3 2 . . 
    . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 2 3 3 2 . . . 
    . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 . . . . 
    f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f 
    . . f 1 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 1 f . . 
    . f f f 1 1 1 f 1 1 1 1 1 1 1 1 f 1 1 1 f f f . 
    . . . f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f . . . 
    . . f f 1 1 1 1 1 1 1 f f 1 1 1 1 1 1 1 f f . . 
    . . . . f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f . . . . 
    . . . . . f f 1 1 1 1 1 1 1 1 1 1 f f . . . . . 
    . . . . . . . f f f f f f f f f f . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(player2, 100, 100)
for (let index = 0; index < 5; index++) {
    makeEnemies()
}
game.onUpdate(function () {
    enemyList = sprites.allOfKind(SpriteKind.Enemy)
    for (let value of enemyList) {
        followSprite = value
        if (player2.x > followSprite.x) {
            followSprite.vx = 2
        } else {
            followSprite.vx = -2
        }
        if (player2.y > followSprite.y) {
            followSprite.vy = 2
        } else {
            followSprite.vy = -2
        }
    }
})
