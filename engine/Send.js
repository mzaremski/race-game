"use strict";

const Player = require("./Player")

var Send = {
    toPlayer: function(socket, nameOfEmit, message){
        socket.emit(nameOfEmit, message);
    },

    toPlayers: function(players, nameOfEmit, message){
        var i = players.length
        while(i--){
            players[i].socket.emit(nameOfEmit, message);
        }
    },

    toRegistered: function(nameOfEmit, message){
        const registered = Player.registered;
        for(var player in registered){
            registered[player].socket.emit(nameOfEmit, message);
        }
    }
}

module.exports = Send
