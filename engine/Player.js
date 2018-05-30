const FastCar = require("./Cars/FastCar")




function Player(nick, sock, id){
    sock.nick = nick;
    this.sock = sock;

    this.nick = nick;
    this.id = id;
    this.x = 400;
    this.y = 400;
    this.rotation = 1;

    FastCar.call(this);

    console.log("Registered: " + this.nick + " o id: " + this.id)
}
Player.prototype = Object.create(FastCar.prototype);




Player.register = function(nick, sock){
    if(!Player.registered[nick]){
        Player.numberOfAll++;
        Player.registered[nick] = new Player(nick, sock, Player.numberOfAll);

        return Player.registered[nick]
    }else{
        return false
    }
}




//If you want send player obj to client, you must delete player.sock otherwise error (Log: "Maximum call stack size exceeded")
Player.prototype.getDataToClient = function(){
    return Object.assign(this, {sock: false})
}





Player.registered = {};
Player.numberOfAll = 0;





module.exports = Player
