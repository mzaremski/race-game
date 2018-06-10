"use strict";

const Player = require('./Player')
const Send = require('./Send')
const Control = require('./Control')
const p2 = require('p2');
const Physics = require('./Physics.js');

const allSockets = []

function onConnection(io){
    io.on('join', function(ioData){
        allSockets.push(io)
    })


    io.on('disconnect', function(){
        allSockets.splice(allSockets.indexOf(io), 1);
        if(Player.registered[io.nick]){
            delete Player.registered[io.nick]
            Physics.vehicles[io.nick].removeFromWorld()
            delete Physics.vehicles[io.nick]
        }
    })


    io.on('setNick', function(nick){
        var registeredSuccess = Player.register(nick, io) //Player.register if success - return Player object
        if( registeredSuccess ){
            Physics.createVehicle(nick)
            Send.toRegistered( "addPlayer", Player.getPlayersData());
            Send.toPlayer(registeredSuccess.socket, "startGame");
            Send.toPlayer(registeredSuccess.socket, "setNick", nick);
        }else{
            io.emit("error", "Player registration failed");
        }
    });

    io.on('keyboardData', function(keyboardData){
        Control.computePosition(Player.registered[io.nick], keyboardData)
    })
}



module.exports = onConnection
