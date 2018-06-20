"use strict";

const onConnection = require('./onConnection.js')
const Send = require('./Send.js')
const Physics = require('./Physics.js');
const Room = require('./Room.js');

const Engine = {
    init(io){
        io.on('connection', onConnection);

        Room.create()


    }
}

module.exports = Engine
