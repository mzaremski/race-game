"use strict";

const Map = require('./Map.js');
const Send = require('./Send.js');
const Physics = require('./Physics.js');

function Room(map, id){
    this.map = map
    this.playersLimit = map.respsCoords.length
    this.players = []
    this.id = id
}
Room.allRooms = []
Room.countOfRooms = 0



Room.addPlayerToEmptyRoom = function(player, vehicleData){
    let roomWhereAdded
    var isAdded = Room.allRooms.some((room)=>{
        if(room.players.length < room.playersLimit){
            room.addPlayer(player, vehicleData)
            roomWhereAdded = room
            return true
        }
    })

    if(!isAdded){
        let room = Room.create()
        roomWhereAdded = room
        room.addPlayer(player, vehicleData)
    }

    return roomWhereAdded
}

Room.prototype.addPlayer = function(player, vehicleData){
    this.players.push(player)
    player.roomId = this.id
    Physics.vehicles[player.nick].setPosition(this.map.respsCoords[this.players.indexOf(player)])

    vehicleData.vehicle.addToPhysicsWorld(this.map.physicsWorld)

    return true
}

Room.prototype.getVehiclesDataToClient = function(){
    let data = {}

    this.players.forEach((player)=>{
        let nick = player.nick
        data[nick] = Physics.getDataVehicleToClient(nick)
    })

    return data
}

Room.create = function(){
    const room = new Room( Map.create(), Room.countOfRooms)
    const world = room.map.physicsWorld

    Room.allRooms.push(room)
    Room.countOfRooms++

    setInterval(function(){
        Send.toPlayers(room.players, "vehiclesData", room.getVehiclesDataToClient() )
        world.step(1/30)
    }, 33)//30 timeTickRate

    return room
}





module.exports = Room
