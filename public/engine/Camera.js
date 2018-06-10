"use strict";
const VAR = require("./VAR.js");
const Map = require("./Map.js");
const gameObject = require("./gameObject.js");
const debugRender = require("./debugRender.js");


const Camera = {
    camX:0,
    camY:0,
    followPlayer(player, dataFromServer, app){
        player.sprite.rotation = dataFromServer.angle + 1.5708 + 1.5708;// 1.5708 is 90degree in radians.

        if( dataFromServer.position[0] < VAR.W/2){//if player is near left edge of map, move only car
            Map.moveX( 0 )
            this.camX = 0;
            player.sprite.x = dataFromServer.position[0]
        }else if(dataFromServer.position[0] + VAR.W/2 > VAR.mapWidth){//if player is near right edge of map, move only car
            player.sprite.x = dataFromServer.position[0] - VAR.mapWidth + VAR.W
        }else{//if player is on middle of map, move map
            Map.moveX( VAR.W/2 - dataFromServer.position[0] )
            this.camX = VAR.W/2 - dataFromServer.position[0]
        }

        if(dataFromServer.position[1] < VAR.H/2){//if player is near left edge of map, move only car
            Map.moveY( 0 )
            this.camY = 0;
            player.sprite.y = dataFromServer.position[1] - Map.mapSprite.y;
        }else if(dataFromServer.position[1] + VAR.H/2 > VAR.mapHeight) {//if player is near right edge of map, move only car
            player.sprite.y = dataFromServer.position[1] - VAR.mapHeight + VAR.H
        }else{//if player is on middle of map, move map
            Map.moveY( VAR.H/2 - dataFromServer.position[1] )
            this.camY = VAR.H/2 - dataFromServer.position[1]
        }
    },

    setPlayerPosition(player, dataFromServer){
        player.sprite.rotation = dataFromServer.angle + 1.5708 + 1.5708;// 1.5708 is 90degree in radians.
        player.sprite.x = dataFromServer.position[0] + this.camX;//set player position in reference to client player(camX)
        player.sprite.y = dataFromServer.position[1] + this.camY;//set player position in reference to client player(camY)
    }
}

module.exports = Camera
