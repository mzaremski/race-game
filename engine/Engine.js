"use strict";

const onConnection = require('./onConnection.js')
const Send = require('./Send.js')
const Physics = require('./Physics.js');

const Engine = {
    init(io){
        io.on('connection', onConnection);

        setInterval(function(){
            Send.toRegistered( "vehiclesData", Physics.getVehiclesDataToClient() )
            Physics.world.step(1/30)
        }, 33)//30 timeTickRate
    }
}

module.exports = Engine
