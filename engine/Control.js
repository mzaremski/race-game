"use strict";

const Control = {
    computePosition( player, keyboardData ){
        if(keyboardData.key_87 && !keyboardData.key_32){//W if not press space
            player.speed += ( player.maxSpeed - player.speed ) * player.acc
            this.setPlayerPosition( player )
        }else if( keyboardData.key_83 || keyboardData.key_32){//S or SPACE

            if(player.speed <= 0 && keyboardData.key_83 && !keyboardData.key_32){//if back a car
                player.speed = Math.max(player.maxBackwardSpeed, player.speed - player.backwardSpeed)
            }else{//if press SPACE
                player.speed = Math.max(0, player.speed - (player.maxSpeed - player.speed + 4) * player.brakePower)
            }

            this.setPlayerPosition( player )
        }else{
            player.speed = Math.max(0, player.speed - player.engineBraking)
            this.setPlayerPosition( player )
        }


        if(keyboardData.key_65){//A
            if(player.speed < 3){

                player.rotation -= player.speed * ( player.speed > 0 ? 0.035 : 0.02)
                console.timeEnd('someFunction');
            }else{
                player.rotation -= player.rotationSpeed
            }
        }


        if(keyboardData.key_68){//D
            if(player.speed < 3){
                player.rotation += player.speed * ( player.speed > 0 ? 0.035 : 0.02)
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
