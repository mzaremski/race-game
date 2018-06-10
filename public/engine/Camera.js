"use strict";
const VAR = require("./VAR.js");
const Map = require("./Map.js");
const gameObject = require("./gameObject.js");
const debugRender = require("./debugRender.js");


const Camera = {
    camX:0,
    camY:0,
    followPlayer(player, app){
        const vehicleData = player.vehicle;
        player.sprite.rotation = vehicleData.angle + 1.5708 + 1.5708;// 1.5708 is 90degree in radians.


        if( vehicleData.position[0] < VAR.W/2){//if player is near left edge of map, move only car

            this.camX = 0;
            Map.moveX( this.camX )
            player.sprite.x = vehicleData.position[0]

        }else if(vehicleData.position[0] + VAR.W/2 > VAR.mapWidth){//if player is near right edge of map, move only car

            this.camX = -VAR.mapWidth + VAR.W;
            player.sprite.x = vehicleData.position[0] + this.camX
            Map.moveX( this.camX )

        }else{//if player is on middle of map, move map
            Map.moveX( VAR.W/2 - vehicleData.position[0] )
            this.camX = VAR.W/2 - vehicleData.position[0]
        }


        if(vehicleData.position[1] < VAR.H/2){//if player is near left edge of map, move only car

            this.camY = 0;
            Map.moveY( this.camY )
            player.sprite.y = vehicleData.position[1] - Map.mapSprite.y;

        }else if(vehicleData.position[1] + VAR.H/2 > VAR.mapHeight) {//if player is near right edge of map, move only car

            this.camY = -VAR.mapHeight + VAR.H
            player.sprite.y = vehicleData.position[1] + this.camY
            Map.moveY( this.camY )

        }else{//if player is on middle of map, move map

            this.camY = VAR.H/2 - vehicleData.position[1]
            Map.moveY( this.camY )
        }
    },

    setPlayerPosition(player){
        const vehicleData = player.vehicle;
        player.sprite.rotation = vehicleData.angle + 1.5708 + 1.5708;// 1.5708 is 90degree in radians.
        player.sprite.x = vehicleData.position[0] + this.camX;//set player position in reference to client player(camX)
        player.sprite.y = vehicleData.position[1] + this.camY;//set player position in reference to client player(camY)
    },

    setAllPlayersPosition(players){
        //players

    }
}

module.exports = Camera
