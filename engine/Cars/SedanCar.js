"use strict";

function SedanCar() {
    this.modelName = "SedanCar"
    this.imageSrc = "img/cars/car_green_3.png";
    this.width = 70;
    this.height = 131;

    this.frontWheelPosition = [0, 30]
    this.backWheelPosition = [0, -30]
    this.frontWheelSideFriction = 800
    this.backWheelSideFriction = 740

    this.power = 800;
    this.brakePower = 700;
    this.engineBraking = 0;
    this.mass = 1;
    this.steerValue = 0.4
    this.driftWheelFriction = 120;
    this.driftBrakeForce = 100;
    //this.life = 100;
}

SedanCar.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = SedanCar
