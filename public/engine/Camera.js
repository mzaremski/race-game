"use strict";
const VAR = require("./VAR.js");
const Map = require("./Map.js");
const gameObject = require("./gameObject.js");


const Camera = {
    camX:0,
    camY:0,
    followPlayer(player, dataFromServer){
        player.sprite.rotation = dataFromServer.rotation + 1.5708;// 1.5708 is 90degree in radians.

        if( dataFromServer.x < VAR.W/2){//if player is near left edge of map, move only car
            player.sprite.x = dataFromServer.x
        }else if(dataFromServer.x + VAR.W/2 > VAR.mapWidth){//if player is near right edge of map, move only car
            player.sprite.x = dataFromServer.x - VAR.mapWidth + VAR.W
        }else{//if player is on middle of map, move map
            Map.moveX( VAR.W/2 - dataFromServer.x )
            this.camX = VAR.W/2 - dataFromServer.x
        }

        if(dataFromServer.y < VAR.H/2){//if player is near left edge of map, move only car
            player.sprite.y = dataFromServer.y - Map.mapSprite.y;
        }else if(dataFromServer.y + VAR.H/2 > VAR.mapHeight) {//if player is near right edge of map, move only car
            player.sprite.y = dataFromServer.y - VAR.mapHeight + VAR.H
        }else{//if player is on middle of map, move map
            Map.moveY( VAR.H/2 - dataFromServer.y )
            this.camY = VAR.H/2 - dataFromServer.y
        }
    },

    setPlayerPosition(player, dataFromServer){
        player.sprite.rotation = dataFromServer.rotation + 1.5708;// 1.5708 is 90degree in radians.
        player.sprite.x = dataFromServer.x + this.camX;//set player position in reference to client player(camX)
        player.sprite.y = dataFromServer.y + this.camY;//set player position in reference to client player(camY)
    }
}

module.exports = Camera
