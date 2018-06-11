"use strict";
const VAR = require("./VAR.js");

const Map = {

    init(stage){
        this.mapSprite = new PIXI.Sprite(PIXI.utils.TextureCache[stage.mapSrcImage]);
        // VAR.mapWidth = this.mapSprite.width;
        // VAR.mapHeight = this.mapSprite.height;
        Map.scale(VAR.scale)
    },

    draw(app){
        app.stage.addChild(this.mapSprite);
    },

    scale(scale){
        this.mapSprite.scale.x = scale;
        this.mapSprite.scale.y = scale;
        VAR.mapWidth = this.mapSprite.width;
        VAR.mapHeight = this.mapSprite.height;
    },

    moveX( x ){ this.mapSprite.x = x },
    moveY( y ){ this.mapSprite.y = y }
}

module.exports = Map;
