sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(randint(0, 10), randint(0, 20))
    sprite.setFlag(SpriteFlag.AutoDestroy, false)
    sprite.follow(mySprite, 10)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`rightStairs`, function (sprite, location) {
    game.gameOver(true)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`projectilePlaceholder`, mySprite, 20, 0)
    animation.runImageAnimation(
    projectile,
    assets.animation`waterProjectileRight`,
    100,
    true
    )
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`projectilePlaceholder`, mySprite, -20, 0)
    animation.runImageAnimation(
    projectile,
    assets.animation`waterProjectileLeft`,
    100,
    true
    )
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    info.changeScoreBy(1)
    otherSprite.startEffect(effects.disintegrate)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`leftStairs`, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
})
let mySprite: Sprite = null
let projectile: Sprite = null
let enemySprite = sprites.create(assets.image`enemyFire`, SpriteKind.Enemy)
enemySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
projectile = sprites.createProjectileFromSprite(assets.image`projectilePlaceholder`, mySprite, 20, 0)
mySprite = sprites.create(assets.image`playerSunflower`, SpriteKind.Player)
controller.moveSprite(mySprite)
tiles.setTilemap(tilemap`level0`)
tiles.placeOnRandomTile(mySprite, assets.tile`startDiamond`)
scene.cameraFollowSprite(mySprite)
info.startCountdown(14)
info.setLife(5)
projectile.setBounceOnWall(true)
game.setGameOverEffect(true, effects.melt)
game.onUpdateInterval(500, function () {
    enemySprite = sprites.create(assets.image`enemyFire`, SpriteKind.Enemy)
    enemySprite.setFlag(SpriteFlag.GhostThroughWalls, true)
    enemySprite.setPosition(randint(0, 150), randint(0, 120))
})
