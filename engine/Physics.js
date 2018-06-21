"use strict";
const p2 = require('p2');
const Player = require('./Player.js')

const Physics = {
    vehicles: {},

    createWorld(){
        return new p2.World({
            gravity:[0, 0]
        })
    },

    createVehicle(nick){
        const player = Player.registered[nick]

        const body = new p2.Body({mass: player.mass, position: player.defaultPosition})
        body.addShape(
            new p2.Box({
                width: player.width, height:player.height - player.radiusCorner*2
            })
        )
        body.addShape(
            new p2.Capsule({ // Second capsule above the trunk
            	length:  player.width - player.radiusCorner*2,
            	radius:  player.radiusCorner
            }),
            [0, (player.height-player.radiusCorner*2)/2]
        )
        body.addShape(
            new p2.Capsule({ // Second capsule above the trunk
            	length:  player.width - player.radiusCorner*2,
            	radius:  player.radiusCorner
            }),
            [0, (player.height-player.radiusCorner*2)/-2]
        )



        const vehicle = new p2.TopDownVehicle(body);
        vehicle.body = body;


        const frontWheel = vehicle.addWheel({ localPosition: player.frontWheelPosition });
        const backWheel = vehicle.addWheel({ localPosition: player.backWheelPosition  });
        frontWheel.setSideFriction(player.frontWheelSideFriction);
        backWheel.setSideFriction(player.backWheelSideFriction);// Less side friction on back wheel makes it easier to drift

        vehicle.chassisBody.damping = 0.4

        this.vehicles[nick] = vehicle;

        return { vehicle, body }
    },

    getDataVehicleToClient(nick){
        return {
            nick: nick,
            position: this.vehicles[nick].chassisBody.position,
            angle: this.vehicles[nick].chassisBody.angle
        }
    }
}


p2.TopDownVehicle.prototype.setPosition = function(position){
    this.body.position = [position.x + 64, position.y + 64]
    this.body.angle = position.angle

}

p2.TopDownVehicle.prototype.removeFromWorld = function(){
    this.world.islandSplit = false;
    this.world.removeBody(this.body)
}

p2.TopDownVehicle.prototype.addToPhysicsWorld = function(physicsWorld){
    physicsWorld.addBody(this.body)
    this.addToWorld(physicsWorld);
}


module.exports = Physics
