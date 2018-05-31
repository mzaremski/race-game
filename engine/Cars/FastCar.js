"use strict";

function FastCar() {
    this.modelName = "Fast Car"
    this.acceleration = 1.07;
    this.weight = 1700;
    this.brakePower = 0.8;
    this.adhesion = 10//przyczepnośc
    this.rotationSpeed = 0.07//szybkośc skrętu
    this.hp = 100;
    this.maxSpeed = 1000;
    this.currentlySpeed = 0;
    this.imageSrc = "img/cars/car_green_3.png"
}

FastCar.prototype.hello = function(){
    console.log("Helo, my name is: " + this.modelName)
}


module.exports = FastCar
