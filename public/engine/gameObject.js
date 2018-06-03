"use strict";

const gameObject = function(player){
    this.sprite = new PIXI.Sprite(PIXI.utils.TextureCache[player.imageSrc]);
    this.sprite.x = player.x;
    this.sprite.y = player.y;
    this.sprite.rotation = player.rotation;
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.7;

    return Object.assign(this, player)
}

gameObject.all = [];

gameObject.draw = function(objects, app){
    for( let i in objects ){
        app.stage.addChild( objects[i].sprite )
    }
}

gameObject.deleteUnexist = function(player, app){
    app.stage.removeChild(player.sprite)
}

module.exports = gameObject
