"use strict";

const Player = require("./Player")

var Send = {
    toPlayer: function(socket, nameOfEmit, message){
        socket.emit(nameOfEmit, message);
    },

    toRoom: function(roomName, nameOfEmit, message){
        Room.all[roomName].members.forEach(function(member){
            member.socket.emit(nameOfEmit, message);
        });
    },

    toRegistered: function(nameOfEmit, message){
        const registered = Player.registered;
        for(var player in registered){
            registered[player].socket.emit(nameOfEmit, message);
        }
    }
}

module.exports = Send
