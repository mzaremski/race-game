"use strict";
/* Room */

const stagesConfig = require('./stagesConfig')


function Room(name, maxMembers, allowedPassword, password){
    this.name = name;
    this.maxMembers =  maxMembers;
    this.members = [];
    this.messages = [];
    this.stage = stagesConfig.default
}

Room.all = {}
Room.numberOfAll = 0;

Room.create = function(name,maxMembers, allowedPassword, password){
    if(!Room.all[name]){
        Room.all[name] = new Room(name, maxMembers, allowedPassword, password);
        Room.numberOfAll++
    }
}

Room.prototype.addUser = function(user,){
}

Room.prototype.removeUser = function(userToRemove){
    // var roomMembers = this.members;
    // roomMembers.splice(roomMembers.indexOf(userToRemove), 1);
    // userToRemove.room = false;
}

Room.prototype.getNicksAllMembers = function(){
    var nicksAllMembers = [];
    this.members.forEach(function(member){
        nicksAllMembers.push(member.nick);
    })
    return nicksAllMembers
}
