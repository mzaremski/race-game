"use strict";
const p2 = require('p2');
const Player = require('./Player.js')

const Physics = {
    world: new p2.World({
        gravity:[0, 0]
    }),
    vehicles: {},
    createVehicle(nick){
        const player = Player.registered[nick]

        const body = new p2.Body({mass: player.mass, position: player.position})
        body.addShape(
            new p2.Box({
                width: player.width, height:player.height
            })
        )
        body.addShape(
            new p2.Capsule({ // Second capsule above the trunk
            	length:  player.width - player.radiusCorner*2,
            	radius:  player.radiusCorner
            }),
            [0, (player.height-player.radiusCorner*2)/2 + 3]
        )
        body.addShape(
            new p2.Capsule({ // Second capsule above the trunk
            	length:  player.width - player.radiusCorner*2,
            	radius:  player.radiusCorner
            }),
            [0, (player.height-player.radiusCorner*2)/-2 + 3]
        )



        const vehicle = new p2.TopDownVehicle(body);
        vehicle.body = body;


        const frontWheel = vehicle.addWheel({ localPosition: player.frontWheelPosition });
        const backWheel = vehicle.addWheel({ localPosition: player.backWheelPosition  });
        frontWheel.setSideFriction(player.frontWheelSideFriction);
        backWheel.setSideFriction(player.backWheelSideFriction);// Less side friction on back wheel makes it easier to drift


        Physics.world.addBody(body)
        vehicle.addToWorld(Physics.world);


        vehicle.chassisBody.damping = 0.4

        this.vehicles[nick] = vehicle;
    },

    getDataVehicleToClient(nick){
        return {
            nick: nick,
            position: this.vehicles[nick].chassisBody.position,
            angle: this.vehicles[nick].chassisBody.angle
        }
    },

    getVehiclesDataToClient(){
        const vehicles = Physics.vehicles;
        const data = {}
        for(var i in vehicles){
            data[i] = this.getDataVehicleToClient(i)
        }
        return data
    }
}


p2.TopDownVehicle.prototype.removeFromWorld = function(){
    Physics.world.islandSplit = false;
    Physics.world.removeBody(this.body)
}


module.exports = Physics
