"use strict";

const Control = {
    computePosition( player, keyboardData ){
        if(keyboardData.key_87){//W
            player.speed += ( player.maxSpeed - player.speed ) * player.acc
            this.setPlayerPosition( player )
        }else if( keyboardData.key_83 || keyboardData.key_32){//S or SPACE
            player.speed = Math.max(0, player.speed - (player.maxSpeed - player.speed + 4) * player.brakePower)
            this.setPlayerPosition( player )
        }else{
            player.speed = Math.max(0, player.speed - player.engineBraking)
            this.setPlayerPosition( player )
        }


        if(keyboardData.key_65){//A
            if(player.speed < 3){
                player.rotation -= player.speed/30
            }else{
                player.rotation -= player.rotationSpeed
            }
        }


        if(keyboardData.key_68){//D
            if(player.speed < 3){
                player.rotation += player.speed/30
            }else{
                player.rotation += player.rotationSpeed
            }
        }

        return player
    },

    setPlayerPosition(player){
        player.modX = Math.cos(player.rotation) * player.speed
        player.modY = Math.sin(player.rotation) * player.speed

        player.y += player.modY
        player.x += player.modX
    }
}
// W - 87
// A - 65
// S - 83
// D - 68
// SPACE - 32
module.exports = Control
