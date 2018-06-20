"use strict";

const Player = require('./Player')
const Send = require('./Send')
const Control = require('./Control')
const Room = require('./Room')
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
            //Remove player from room player list
            Room.allRooms.some((room)=>{
                if(room.id === Player.registered[io.nick].roomId){
                    room.players.splice(room.players.indexOf(Player.registered[io.nick]), 1);
                    return room
                }
            })

            //delete player from registered players
            delete Player.registered[io.nick]

            //delete player vehicle from world
            Physics.vehicles[io.nick].removeFromWorld()

            //delete player vehicle from vehicles
            delete Physics.vehicles[io.nick]
        }

    })


    io.on('setNick', function(nick){
        var registeredPlayer = Player.register(nick, io) //Player.register if success - return Player object
        if( registeredPlayer ){
            const roomWhereAdded = Room.addPlayerToEmptyRoom( registeredPlayer, Physics.createVehicle(nick) )
            Send.toPlayers( roomWhereAdded.players, "addPlayer", Player.getPlayersData());
            Send.toPlayer(registeredPlayer.socket, "startGame");
            Send.toPlayer(registeredPlayer.socket, "setNick", nick);
        }else{
            io.emit("error", "Player registration failed");
        }
    });

    io.on('keyboardData', function(keyboardData){
        if(io.nick){
            Control.computePosition(Player.registered[io.nick], keyboardData)
        }
    })
}



module.exports = onConnection
