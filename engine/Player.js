"use strict";

const SedanCar = require("./Cars/SedanCar")
const SportCar = require("./Cars/SportCar")
const f1Car = require("./Cars/f1Car")
const cars = [SedanCar, SportCar, f1Car]




function Player(nick, socket, id){
    socket.nick = nick;
    this.socket = socket;

    this.nick = nick;
    this.id = id;
    this.room = false;

    this.defaultPosition = [400,400]

    const car = Player.randomCar();
    car.call(this);
    Player.prototype = Object.assign({}, car.prototype, Player.prototype);
}



Player.randomCar = function(){
    var number = random(0, cars.length-1)
    return cars[number]
}
function random(min, max){
    return Math.floor(Math.random()*(max-min+1))+min
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
