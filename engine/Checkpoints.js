"use strict";
const Physics = require('./Physics.js');

const Checkpoints = function(checkpoints, scoreBoard){
    this.checkpoints = checkpoints
    this.scoreBoard = scoreBoard
}

Checkpoints.prototype.check = function(players){
    var i = players.length
    while(i--){
        const player = players[i]
        const p = Physics.vehicles[player.nick].body.position
        const current = player.currentCheckpoint
        const ch = this.checkpoints[current]


        //p[0] - position X
        //p[1] - position Y
        if( p[0] > ch[0] &&
            p[0] < ch[0] + ch[2]&&
            p[1] > ch[1] &&
            p[1] < ch[1] + ch[3])
        {
            if(current + 1 === this.checkpoints.length){
                player.currentCheckpoint = 0;
            }else{
                player.currentCheckpoint++
            }

            if(current === 0){
                this.scoreBoard.playerTime(player.nick, Date.now())
            }
        }
    }
}

module.exports = Checkpoints
