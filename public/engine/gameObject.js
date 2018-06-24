"use strict";
const VAR = require("./VAR.js");

const gameObject = function(player){
    this.sprite = new PIXI.Sprite(PIXI.utils.TextureCache[player.imageSrc]);
    this.sprite.anchor.x = 0.5;
    this.sprite.anchor.y = 0.5;
    this.sprite.scale.x = VAR.scale
    this.sprite.scale.y = VAR.scale
    this.debugPoints = [];

    return Object.assign(this, player)
}

gameObject.all = [];

gameObject.prototype.createNick = function(){
    this.nickRender = new PIXI.Text(
        this.nick.toUpperCase(),
        new PIXI.TextStyle({
              fontFamily: "Righteous",
              letterSpacing: 2,
              fontSize: 13,
              fill: "#000000",
              stroke: 'white',
              strokeThickness: 5
        })
    );
}

gameObject.draw = function(objects, stage){
    for( let i in objects ){
        stage.addChild( objects[i].sprite )
        if(objects[i].nickRender){
            stage.addChild( objects[i].nickRender )
        }
    }
}




gameObject.scale = function( scale, objects){
    for( let i in objects ){
        objects[i].sprite.scale.x = scale
        objects[i].sprite.scale.y = scale
    }
}



gameObject.deleteUnexist = function(player, stage){
    stage.removeChild(player.sprite)
    stage.removeChild(player.nickRender)
}

module.exports = gameObject
