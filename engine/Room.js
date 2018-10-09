"use strict";

const Map = require('./Map.js');
const Send = require('./Send.js');
const Physics = require('./Physics.js');
const Checkpoints = require('./Checkpoints.js');
const scoreBoard = require('./scoreBoard.js');

function Room(map, id){
    const timeTable = new scoreBoard()

    this.map = map
    this.playersLimit = map.respsCoords.length
    this.players = []
    this.id = id
    this.timeTable = timeTable
    this.checkpoints = new Checkpoints(map.mapFile.checkpoints, timeTable)
}
Room.allRooms = []
Room.countOfRooms = 0



Room.addPlayerToEmptyRoom = function(player, vehicleData) {
  let roomWhereAdded;

  var isAdded = Room.allRooms.some(room => {
    if (room.players.length < room.playersLimit) {
      room.addPlayer(player, vehicleData);
      roomWhereAdded = room;
      return true;
    }
  });

  if (!isAdded) {
    let room = Room.create();
    roomWhereAdded = room;
    room.addPlayer(player, vehicleData);
  }

  return roomWhereAdded;
};

Room.prototype.addPlayer = function(player, vehicleData) {
  this.players.push(player);

  player.roomId = this.id;
  Physics.vehicles[player.nick].setPosition(
    this.map.respsCoords[this.players.indexOf(player)]
  );

  vehicleData.vehicle.addToPhysicsWorld(this.map.physicsWorld);

  this.timeTable.addPlayer(player.nick);

  return true;
};

Room.prototype.getVehiclesDataToClient = function() {
  let data = {};

  var i = this.players.length;
  while (i--) {
    let nick = this.players[i].nick;
    data[nick] = Physics.getDataVehicleToClient(nick);
  }

  return data;
};

Room.create = function() {
  const room = new Room(Map.create(), Room.countOfRooms);
  const world = room.map.physicsWorld;
  Room.allRooms.push(room);
  Room.countOfRooms++;

  const sendToPlayers = Send.toPlayers;

  setInterval(function() {
    sendToPlayers(room.players, "vehiclesData", room.getVehiclesDataToClient());

    room.checkpoints.check(room.players);

    world.step(1 / 30);
  }, 33); //30 timeTickRate

  return room;
};

module.exports = Room;
