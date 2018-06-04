"use strict";

function SedanCar() {
    this.modelName = "SedanCar"
    this.acc = 0.05;//Acceleration
    this.backwardSpeed = 0.2;
    this.maxBackwardSpeed = -5;
    this.weight = 1700;
    this.brakePower = 0.08;
    this.engineBraking = 0.35;
    this.stick = 1; // stick car to the ground 0-1
    this.rotationSpeed = 0.1;//szybkośc skrętu
    this.hp = 100;
    this.speed = 0;
    this.maxSpeed = 30;
    this.imageSrc = "img/cars/car_green_3.png"
}

SedanCar.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = SedanCar
