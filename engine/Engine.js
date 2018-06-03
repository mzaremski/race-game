"use strict";

let onConnection = require('./onConnection.js')
let Send = require('./Send.js')
let Player = require('./Player.js')

const Engine = {
    init(io){
        io.on('connection', onConnection);

        setInterval(function(){
            Send.toRegistered( "playersData", Player.getPlayersData() )
        }, 33)//30 timeTickRate
    }
}

module.exports = Engine
