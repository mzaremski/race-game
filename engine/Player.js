"use strict";

const SedanCar = require("./Cars/SedanCar")
const SportCar = require("./Cars/SportCar")




function Player(nick, socket, id){
    socket.nick = nick;
    this.socket = socket;

    this.nick = nick;
    this.id = id;
    this.x = 400;
    this.y = 400;
    this.rotation = 0;//Rotation Angle

    this.modX = 0;
    this.modY = 0;

    this.currSpeed = 0;

    const car = Player.randomCar();
    car.call(this);
    Player.prototype = Object.assign({}, car.prototype, Player.prototype);
}



Player.randomCar = function(){
    const number = Math.round(Math.random())//random 1 or 0
    return number ? SportCar : SedanCar;
}





Player.register = function(nick, socket){
    if(!Player.registered[nick]){
        Player.numberOfAll++;
        Player.registered[nick] = new Player(nick, socket, Player.numberOfAll);

        return Player.registered[nick]
    }else{
        return false
    }
}



Player.getPlayersData = function(){
    const registered = Player.registered;
    const data = {}
    for(var player in registered){
        data[player] = registered[player].getDataToClient()
    }
    return data
}




//If you want send player obj to client, you must delete player.sock otherwise error (Log: "Maximum call stack size exceeded")
Player.prototype.getDataToClient = function(){
    return Object.assign({}, this, {socket: false})
}





Player.registered = {};
Player.numberOfAll = 0;





module.exports = Player
