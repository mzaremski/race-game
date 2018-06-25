"use strict";
const PIXI = require("pixi.js");
const VAR = require("./VAR.js");
const Map = require("./Map.js");
const Loader = require("./Loader.js");
const gameObject = require("./gameObject.js");
const Keyboard = require("./Keyboard.js");
const stagesConfig = require("./stagesConfig.js");
const Camera = require("./Camera.js");
const scoreBoard = require("./scoreBoard.js");
const debugRender = require("./debugRender.js");
const io = require("socket.io-client");

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

socket.on("scoreBoard", function(scoreData){
    scoreBoard.update(scoreData)
    scoreBoard.draw(Game.app.stage)
})

//socket.on("showPoints", (points)=>{ debugRender.renderCarPoints(Game.gameData.players[socket.nick], points, Game.app }))

socket.on("setNick", function(nick){
    socket.nick = nick;
})

socket.on("addPlayer", function(playersData){
    for(var i in playersData){
        if(!Game.gameData.players[i]){
            Game.gameData.players[i] = new gameObject(playersData[i])

            if(i != socket.nick){
                Game.gameData.players[i].createNick()
            }
        }
    }
})

socket.on("removePlayer", function(nick){
    gameObject.deleteUnexist(Game.gameData.players[nick], Game.app.stage)
    delete Game.gameData.players[nick]
})

socket.on("startGame", ()=>{Game.start()})

socket.on("vehiclesData", function(vehicles){
    const players = Game.gameData.players

    for(var i in players){
        players[i].vehicle = vehicles[i]
        Camera.setPlayerPosition(players[i])
    }

    Camera.followPlayer(players[socket.nick], Game.app)

    gameObject.draw(players, Game.app.stage)
})






const Game = {
    init(){
        this.setVAR();//set VAR settings like Height/Width canvas
        this.app = new PIXI.Application({width: VAR.W, height: VAR.H});
        //this.resizeWindow();//set VAR settings like Height/Width canvas

        document.body.appendChild(this.app.view);
        //socket.emit("setNick", prompt("WPISZ NICK"))
        socket.emit("setNick", "johnSmith" + VAR.rand(1, 100000))


        window.addEventListener("resize", Game.resizeWindow)
        window.addEventListener("keydown", Keyboard.onKeyDown)
        window.addEventListener("keyup", Keyboard.onKeyUp)
    },

    start: function(){
        const tickRate = VAR.timeTickRate
        setInterval(function(){
            socket.emit("keyboardData", Keyboard.pressed)
        }, tickRate)

        ///////MAP
        Map.init(stagesConfig.default)
        Map.draw(this.app);

        //Game.app.ticker.add(delta => Game.gameLoop(delta));
    },

    gameData:{
        map:{},
        players: {},
        messges: []
    },

    setVAR(){
        VAR.W = window.innerWidth;
        VAR.H = window.innerHeight;
        VAR.scale = VAR.H/974;//974px Standard innerHeight on 1920x1080 desktop - chrome
    },

    resizeWindow(){
        Game.setVAR()
        Game.app.renderer.resize(VAR.W, VAR.H);
        Camera.followPlayer(Game.gameData.players[socket.nick], Game.app)
        Map.scale(VAR.scale)
        gameObject.scale(VAR.scale, Game.gameData.players, Game.app)
    },

    // gameLoop(){
    //
    // },

    stop: function(){
    }
}
