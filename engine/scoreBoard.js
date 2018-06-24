"use strict";

const Player = require("./Player")
const Send = require("./Send")



function scoreBoard(){
    this.records = {}
}

scoreBoard.prototype.addPlayer = function(nick){
    this.records[nick] = {
        lapsTime: [],
        startTime: false,
        endTime: false
    }
}

scoreBoard.prototype.removePlayer = function(nick){
    delete this.records[nick]
}

scoreBoard.prototype.playerTime = function(nick, time){
    const playerRecord = this.records[nick]

    if(playerRecord.startTime){
        playerRecord.endTime = time

        playerRecord.lapsTime.push(playerRecord.endTime - playerRecord.startTime)
    }

    playerRecord.startTime = time

    this.sendScores()
}

scoreBoard.prototype.sendScores = function(){

    for(let i in this.records){
        if(!Player.registered[i]){
            this.removePlayer(i)
        }else{
            Send.toPlayer(
                Player.registered[i].socket,
                "scoreBoard",
                this.records
            )
        }
    }
    
}


module.exports = scoreBoard
