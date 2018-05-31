"use strict";

const VAR = {
    fps:60,
    W: 0,
    H: 0,
    lastTime: 0,
    lastUpdate: -1,
    timeTickRate: 33, //30tickrate
    rand: function(min, max){
        return Math.floor(Math.random()*(max-min+1))+min
    }
}

module.exports = VAR;
