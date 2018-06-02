"use strict";

function FastCar() {
    this.modelName = "Fast Car"
    this.acc = 0.05;//Acceleration
    this.weight = 1700;
    this.brakePower = 0.08;
    this.engineBraking = 0.4;
    this.stick = 1; // stick car to the ground 0-1
    this.rotationSpeed = 0.1;//szybkośc skrętu
    this.hp = 100;
    this.speed = 0;
    this.maxSpeed = 30;
    this.imageSrc = "img/cars/car_green_3.png"
}

FastCar.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = FastCar
