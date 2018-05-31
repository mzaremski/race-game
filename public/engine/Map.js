"use strict";

const Map = function(app){

    this.init = function(stage){
        this.mapSprite = new PIXI.Sprite(PIXI.utils.TextureCache[stage.mapSrcImage]);
    }

    this.draw = function(app){
        app.stage.addChild(this.mapSprite);
    }

}

module.exports = Map;
