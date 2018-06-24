"use strict";

function f1Car() {
    this.modelName = "f1Car"
    this.imageSrc = "img/cars/f1_car.png";
    this.width = 50;
    this.height = 143;
    this.radiusCorner = 20

    this.frontWheelPosition = [0, 30]
    this.backWheelPosition = [0, -30]
    this.frontWheelSideFriction = 800
    this.backWheelSideFriction = 800

    this.power = 950;
    this.brakePower = 700;
    this.engineBraking = 0;
    this.mass = 0.9;
    this.steerValue = 0.4
    this.driftWheelFriction = 120;
    this.driftBrakeForce = 100;
    //this.life = 100;
}

f1Car.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = f1Car
