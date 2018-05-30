var Send = {
    toPlayer: function(sock, nameOfEmit, message){
        sock.emit(nameOfEmit, message);
    },

    toRoom: function(roomName, nameOfEmit, message){
        Room.all[roomName].members.forEach(function(member){
            member.sock.emit(nameOfEmit, message);
        });
    },

    toRegistered: function( nameOfEmit, message){
        for(var i in User.registered){
            User.registered[i].sock.emit(nameOfEmit, message);
        }
    }
}

module.exports = Send
