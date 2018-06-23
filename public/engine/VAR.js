"use strict";

const VAR = {
    fps:60,
    W: 0,
    H: 0,
    lastTime: 0,
    lastUpdate: -1,
    mapWidth: 0,
    mapHeight: 0,
    timeTickRate: 33, //30tickrate
    
    rand(min, max){
        return Math.floor(Math.random()*(max-min+1))+min
    },

    msToTime(ms) {
        var milliseconds = parseInt((ms%1000))
            , seconds = parseInt((ms/1000)%60)
            , minutes = parseInt((ms/(1000*60))%60)

        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return minutes + " : " + seconds + " : " + milliseconds;
    }
}

module.exports = VAR;
