"use strict";
const VAR = require("./VAR.js");

const Map = {

    init(stage){
        this.mapSprite = new PIXI.Sprite(PIXI.utils.TextureCache[stage.mapSrcImage]);
        VAR.mapWidth = this.mapSprite.width;
        VAR.mapHeight = this.mapSprite.height;
    },

    draw(app){
        app.stage.addChild(this.mapSprite);
    },

    moveX( x ){ this.mapSprite.x = x },
    moveY( y ){ this.mapSprite.y = y }
}

module.exports = Map;
