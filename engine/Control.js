const Control = {
    computePosition(player, keyboardData){
        if(keyboardData.key_87){//W
            player.y -= 4
            console.log(player.y)
        }

        if(keyboardData.key_83){//S
            player.y += 4
            console.log(player.y)
        }

        if(keyboardData.key_65){//A
            player.rotation -= player.rotationSpeed
            console.log( player.rotation )
        }

        if(keyboardData.key_68){//D
            player.rotation += player.rotationSpeed
            console.log( player.rotation )
        }

        return player
    }
}
// W - 87
// A - 65
// S - 83
// D - 68
module.exports = Control
