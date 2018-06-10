"use strict";
const PIXI = require("pixi.js");
const VAR = require("./VAR.js");
const Map = require("./Map.js");
const Loader = require("./Loader.js");
const gameObject = require("./gameObject.js");
const Keyboard = require("./Keyboard.js");
const stagesConfig = require("./stagesConfig.js");
const Camera = require("./Camera.js");
const debugRender = require("./debugRender.js");
const io = require("socket.io-client");

const clientEvents = require('./clientEvents')
const socketEvents = require('./socketEvents')

var socket = io('http://localhost:8000');





window.addEventListener(
    "load",
    () => {  Loader.loadStage(stagesConfig["default"], ()=>{ Game.init() })  }
);




socket.on("error", function(message){
    console.error(message);
})

socket.on("message", function(message){
    console.log(message);
})

//socket.on("showPoints", (points)=>{ debugRender.renderCarPoints(Game.gameData.players[socket.nick], points, Game.app }))

socket.on("setNick", function(nick){
    socket.nick = nick;
})

socket.on("addPlayer", function(playersData){
    for(var i in playersData){
        if(!Game.gameData.players[i]){
            Game.gameData.players[i] = new gameObject(playersData[i])
        }
    }
})

socket.on("startGame", ()=>{Game.start()})

socket.on("vehiclesData", function(vehicles){
    const players = Game.gameData.players

    Camera.followPlayer(players[socket.nick], vehicles[socket.nick], Game.app)

    for(var i in players){
        const player = players[i]

        if(vehicles[i] && ( vehicles[i].nick !== socket.nick )){//if player is diffrent from client player
            Camera.setPlayerPosition(player, vehicles[i])//set player position in reference to client player
        }else if(player.nick !== socket.nick){//if somebody disconnect
            gameObject.deleteUnexist(players[i], Game.app)
            delete players[i]
        }
    }

    gameObject.draw(players, Game.app)
})




const Game = {
    init(){
        this.setVAR();//set VAR settings like Height/Width canvas
        this.app = new PIXI.Application({width: VAR.W, height: VAR.H});

        document.body.appendChild(this.app.view);
        //socket.emit("setNick", prompt("PROSZĘ PODAĆ NICK"))
        socket.emit("setNick", "johnSmith" + VAR.rand(1, 100000))


        window.addEventListener("resize", Game.setVAR)
        window.addEventListener("keydown", Keyboard.onKeyDown)
        window.addEventListener("keyup", Keyboard.onKeyUp)
    },

    start: function(){
        setInterval(function(){
            socket.emit("keyboardData", Keyboard.pressed)
        }, VAR.timeTickRate)

        ///////MAP
        Map.init(stagesConfig.default)
        Map.draw(this.app);
    },

    gameData:{
        map:{},
        players: {},
        messges: []
    },

    setVAR(){
        VAR.W = window.innerWidth;
        VAR.H = window.innerHeight;
        VAR.d = Math.min(VAR.W, VAR.H);
    },

    stop: function(){
    }
}
