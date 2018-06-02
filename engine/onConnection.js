"use strict";

const Player = require('./Player')
const Send = require('./Send')
const Control = require('./Control')

const allSockets = []

function onConnection(sock){
    sock.on('join', function(sockData){
        allSockets.push(sock)
    })


    sock.on('disconnect', function(){
        // var user = Player.registered[sock.nick];
        // console.log("Player: " + sock.nick + " opuścił serwer!");
        //
        // if(user){
        //     if(user.room){
        //         var oldRoom = Room.all[user.room]
        //         Room.all[user.room].removePlayer(user);
        //         Send.toRegistered("updateRoomData", [Room.packRoom(oldRoom)]);
        //     }
        //
        //     delete Player.registered[sock.nick];
        //
        // }
    })


    sock.on('setNick', function(nick){
        var registeredSuccess = Player.register(nick, sock) //Player.register if success - return Player object
        if( registeredSuccess ){
            Send.toPlayer( sock , "setNick", registeredSuccess.getDataToClient());
        }else{
            sock.emit("error", "Player registration failed");
        }
    });


    sock.on('keyboardData', function(keyboardData){
        const player = Player.registered[sock.nick];
        Control.computePosition(player, keyboardData)
        sock.emit( "computedPosition", player.getDataToClient() )
    })
}



module.exports = onConnection
