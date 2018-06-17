"use strict";

function SportCar() {
    this.modelName = "SportCar"
    this.imageSrc = "img/cars/car_red_5.png";
    this.width = 65;
    this.height = 121;
    this.radiusCorner = 20

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

SportCar.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = SportCar
