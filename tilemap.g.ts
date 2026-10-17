// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile23 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile18 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile21 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile22 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "exampleLV":
            case "level_1":return tiles.createTilemap(hex`100010000102020c0c1301020c0202130c0202030a0e0b0b0b0b090b0b0b0b0b0b0b0e12110b0b0b0b0b090b0b0b0b0e0b0b0b0d090b0b010c0c160e0b1507070f0b0b0d0a0b0b090b0b0b0b0b0d0e0b090b0b04090e0b0a0b0b0e0b0b0d0b0b0a0b0b04100b0b0a0b0b090e0b0d0b0e090e0b120a0b0b080f0e090b0b0d0e0b100b0b0d090b0e0b0806090b0b0d0b0b0a0b0b040a0b0b0b0e0b090e0b0d0b0b090e0b0d0a0b0b0b0b0b090b0b0d0b0b090b0b04090b0b0c0c0c160b0e0b0b0e090b0b04100b0b0b0b0b0e0b0b0b0b0b090b0b120a0b0b0b0b0b090b0b0b0b0b0a0b1704090e0b0b0b0e090b0b0e0b0b090e0b0408070714070608060714060608060705`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouth1,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterWest0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterNorth1,sprites.dungeon.greenOuterEast1,sprites.dungeon.floorDark5,sprites.dungeon.greenInnerNorthEast,sprites.dungeon.greenOuterWest2,sprites.dungeon.stairWest,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterNorth2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenInnerNorthWest,sprites.dungeon.greenInnerSouthEast,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level1":
            case "level_0":return tiles.createTilemap(hex`1000100008090a08090b09080908080b090808090a02010101010901010101010101020c0601010101010a01010101020101010a0701010a090a080201080a08080101080901010801010101010902010a01010a0a02010a01010201010c0101080101080401010801010902010801020a02010c0901010a08020a01010802010401010a0a010201080a080101080101090101080801010102010a02010801010a0201080a01010101010901010901010901010a080101090a080a0102010102080101090401010101010201010101010a01010c0901010101010a01010101010801050a0a0201010102080101020101080201080a08090d0a090a080a0d090a080a0809`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 2 
. . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,myTiles.transparency16,myTiles.tile21,myTiles.tile22,myTiles.tile18,myTiles.tile23,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
            case "level0":
            case "level2":return tiles.createTilemap(hex`1000100008090a08090b09080908080b090808090a02010101010901010101010101020c0601010101010a01010101020101010a0701010a090a080201080a08080101080901010801010101010902010a01010a0a02010a01010201010c0101080101080401010801010902010801020a02010c0901010a08020a01010802010401010a0a010201080a080101080101090101080801010102010a02010801010a0201080a01010101010901010901010901010a080101090a080a0102010102080101090401010101010201010101010a01010c0901010101010a01010101010801050a0a0201010102080101020101080201080a08090d0a090a080a0d090a080a0809`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . . . . . . . . 2 
. . . 2 2 2 2 . . 2 2 2 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . . . . 2 . . 2 . . 2 
2 . . 2 . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 . 2 . . 2 . . 2 . . 2 
2 . . . 2 2 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . . . . 2 . . 2 . . 2 . . 2 
2 . . 2 2 2 2 . . . . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 . . . . . 2 . . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorDark5,myTiles.transparency16,myTiles.tile21,myTiles.tile22,myTiles.tile18,myTiles.tile23,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "leftStairs":
            case "tile23":return tile23;
            case "rightStairs":
            case "tile18":return tile18;
            case "leftLight":
            case "tile21":return tile21;
            case "upLight":
            case "tile4":return tile4;
            case "rightLight":
            case "tile5":return tile5;
            case "downLight":
            case "tile6":return tile6;
            case "startDiamond":
            case "tile22":return tile22;
            case "pristineWall":
            case "tile1":return tile1;
            case "damagedWall":
            case "tile2":return tile2;
            case "crackedWall":
            case "tile3":return tile3;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
