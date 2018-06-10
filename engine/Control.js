"use strict";
const Physics = require('./Physics.js');

const Control = {
    computePosition( player, keyboardData ){
        const spaceKey  = keyboardData.key_32;
        const vehicle = Physics.vehicles[player.nick]
        const frontWheel = vehicle.wheels[0]
        const backWheel = vehicle.wheels[1]

        //DEFAULT
        backWheel.setSideFriction(player.backWheelSideFriction);
        frontWheel.steerValue = 0;


        if(keyboardData.key_87 && !spaceKey){//W if not press space
            backWheel.setBrakeForce(0);
            backWheel.engineForce = player.power;
        }else if( keyboardData.key_83 ){//S
            backWheel.engineForce = 0;
            backWheel.setBrakeForce(player.brakePower);
        }else if(spaceKey){//SPACE
            backWheel.engineForce = 500;
            backWheel.setBrakeForce(100);
            backWheel.setSideFriction(player.driftWheelFriction)
        }else{
            backWheel.engineForce = 0;
            backWheel.setBrakeForce(0);
        }


        if(keyboardData.key_65){//A
            frontWheel.steerValue = -player.steerValue;
        }

        if(keyboardData.key_68){//D
            frontWheel.steerValue = player.steerValue;
        }
    }
}

module.exports = Control
// W - 87
// A - 65
// S - 83
// D - 68
// SPACE - 32
