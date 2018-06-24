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

        const positionX = vehicleData.position[0] * VAR.scale
        const positionY = vehicleData.position[1] * VAR.scale



        if( positionX < VAR.W/2){//if player is near left edge of map, move only car

            this.camX = 0;
            Map.moveX( this.camX )

        }else if(positionX + VAR.W/2 > VAR.mapWidth){//if player is near right edge of map, move only car

            this.camX = VAR.mapWidth > VAR.W ? -VAR.mapWidth + VAR.W : 0;
            Map.moveX( this.camX )

        }else{//if player is on middle of map, move map
            Map.moveX( VAR.W/2 - positionX )
            this.camX = VAR.W/2 - positionX
        }


        if(positionY < VAR.H/2){//if player is near left edge of map, move only car

            this.camY = 0;
            Map.moveY( this.camY )

        }else if(positionY + VAR.H/2 > VAR.mapHeight) {//if player is near right edge of map, move only car

            this.camY = VAR.mapHeight > VAR.H ? -VAR.mapHeight + VAR.H : 0;
            Map.moveY( this.camY )

        }else{//if player is on middle of map, move map

            this.camY = VAR.H/2 - positionY
            Map.moveY( this.camY )
        }
    },

    setPlayerPosition(player){
        const vehicleData = player.vehicle;
        const sprite = player.sprite;

        sprite.rotation = vehicleData.angle + 1.5708 + 1.5708;// 1.5708 is 90degree in radians.
        sprite.x = vehicleData.position[0] * VAR.scale + this.camX;//set player position in reference to client player(camX)
        sprite.y = vehicleData.position[1] * VAR.scale + this.camY;//set player position in reference to client player(camY)

        const nickRender = player.nickRender
        if(nickRender){
            player.nickRender.position.set(sprite.x - nickRender.width/2, sprite.y - 45)
        }
    }
}

module.exports = Camera
