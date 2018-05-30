"use strict";
const PIXI = require("pixi.js");
const VAR = require("./VAR.js");
const Map = new (require("./Map.js"));
const Loader = require("./Loader.js");
const gameObject = require("./gameObject.js");
const Keyboard = require("./Keyboard.js");
const stagesConfig = require("./stagesConfig.js");
const io = require("socket.io-client");

const clientEvents = require('./clientEvents')
const socketEvents = require('./socketEvents')

var sock = io('http://localhost:8000');





window.addEventListener(
    "load",
    () => {  Loader.loadStage(stagesConfig["default"], ()=>{ Game.init() })  }
);




sock.on("error", function(message){
    console.error(message);
})
sock.on("setNick", function(player){
    Game.gameData.players[player.nick] = new gameObject(player)

    Game.start()
})
sock.on("gameData", function(data){
    Game.gameData = data;
    Game.start();
})
sock.on("computedPosition", function(player){
    const client = Game.gameData.players[player.nick]

    //Uncomment this if you want merge player(from server) and player(from client)
    //Game.gameData.players[player.nick] = Object.assign( {}, Game.gameData.players[player.nick], player)

    client.sprite.x = player.x;
    client.sprite.y = player.y;
    client.sprite.rotation = player.rotation;
})




const Game = {
    init(){
        this.setVAR();//set VAR settings
        this.app = new PIXI.Application({width: VAR.W, height: VAR.H});

        document.body.appendChild(this.app.view);
        sock.emit("setNick", prompt("PROSZĘ PODAĆ NICK"))


        window.addEventListener("resize", Game.setVAR)
        window.addEventListener("keydown", Keyboard.onKeyDown)
        window.addEventListener("keyup", Keyboard.onKeyUp)
    },

    start: function(){
        setInterval(function(){
            sock.emit("keyboardData", Keyboard.pressed)
        }, VAR.timeTickRate)

        ///////MAP
        Map.init(stagesConfig.default)
        Map.draw(this.app);


        ///////CARS
        gameObject.draw(this.gameData.players, Game.app)

        // var auto = new FastCar({x: VAR.W/2, y: VAR.H/2});
        // auto.hello()
        // auto.control()

        //Car.draw(this.app)
    },

    gameData:{
        map:{
            //name: "default"
        },
        players: {}
            // Stefan:{
            //     nick: "Stefan",
            //     carModel: "fastCar",
            //     x: 10,
            //     y: 10,
            //     currentlySpeed: 0,
            //     rotation: 0
            // }
        ,
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
