"use strict";

const Player = require('./Player')
const Send = require('./Send')
const Control = require('./Control')

const allSockets = []

function onConnection(io){
    io.on('join', function(ioData){
        allSockets.push(io)
    })


    io.on('disconnect', function(){
        // var user = Player.registered[io.nick];
        // console.log("Player: " + io.nick + " opuścił serwer!");
        //
        // if(user){
        //     if(user.room){
        //         var oldRoom = Room.all[user.room]
        //         Room.all[user.room].removePlayer(user);
        //         Send.toRegistered("updateRoomData", [Room.packRoom(oldRoom)]);
        //     }
        //
        //     delete Player.registered[io.nick];
        //
        // }
    })


    io.on('setNick', function(nick){
        var registeredSuccess = Player.register(nick, io) //Player.register if success - return Player object
        if( registeredSuccess ){
            Send.toPlayer( io , "setNick", registeredSuccess.getDataToClient());
        }else{
            io.emit("error", "Player registration failed");
        }
    });


    io.on('keyboardData', function(keyboardData){
        const player = Player.registered[io.nick];
        Control.computePosition(player, keyboardData)
        io.emit( "computedPosition", player.getDataToClient() )
    })
}



module.exports = onConnection
