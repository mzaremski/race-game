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

var socket = io("http://localhost:8000/");

window.addEventListener(
  "load",

  () => {
    Loader.loadStage(stagesConfig["default"], () => {
      Game.init();
    });
  }
);

socket.on("error", function(message) {
  console.error(message);
});

socket.on("message", function(message) {
  console.log(message);
});

socket.on("scoreBoard", function(scoreData) {
  scoreBoard.update(scoreData);

  scoreBoard.draw(Game.app.stage);
});

//socket.on("showPoints", (points)=>{ debugRender.renderCarPoints(Game.gameData.players[socket.nick], points, Game.app }))

socket.on("setNick", function(nick) {
  socket.nick = nick;
});

socket.on("addPlayer", function(playersData) {
  for (var i in playersData) {
    if (!Game.gameData.players[i]) {
      Game.gameData.players[i] = new gameObject(playersData[i]);

      if (i != socket.nick) {
        Game.gameData.players[i].createNick();
      }
    }
  }
});

socket.on("removePlayer", function(nick) {
  gameObject.deleteUnexist(Game.gameData.players[nick], Game.app.stage);

  delete Game.gameData.players[nick];
});

socket.on("startGame", () => {
  Game.start();
});

socket.on("vehiclesData", function(vehicles) {
  console.log("VEHICLES")
  const players = Game.gameData.players;

  for (var i in players) {
    if (players[i].vehicle) {
      const player = players[i];

      const vehicleData = vehicles[i];

      player.vehicle = vehicleData;

      player.modX = vehicles[i].position[0] - player.lastPos[0];

      player.modY = vehicles[i].position[1] - player.lastPos[1];

      player.modAngle = vehicles[i].angle - player.lastAngle;

      player.lastPos = vehicles[i].position;

      player.lastAngle = vehicles[i].angle;

      Game.simulateFRAME = false;

      //Positions of objects come from server 30 per sec. simulateFRAME inform when come and GameLoop simulate next frame with modX/Y. Then game have 6-fps.
    }
  }
});

const Game = {
  init() {
    this.setVAR(); //set VAR settings like Height/Width canvas

    this.app = new PIXI.Application({ width: VAR.W, height: VAR.H });

    //this.resizeWindow();//set VAR settings like Height/Width canvas

    document.body.appendChild(this.app.view);

    socket.emit("setNick", prompt("WPISZ NICK"));

    //socket.emit("setNick", "johnSmith" + VAR.rand(1, 100000))

    window.addEventListener("resize", Game.resizeWindow);

    window.addEventListener("keydown", Keyboard.onKeyDown);

    window.addEventListener("keyup", Keyboard.onKeyUp);
  },

  start: function() {
    const tickRate = VAR.timeTickRate;

    setInterval(function() {
      socket.emit("keyboardData", Keyboard.pressed);
    }, tickRate);

    ///////MAP

    Map.init(stagesConfig.default);

    Map.draw(this.app);

    Game.app.ticker.add(delta => Game.gameLoop(delta));
  },

  gameData: {
    map: {},

    players: {},

    messges: []
  },

  setVAR() {
    VAR.W = window.innerWidth;

    VAR.H = window.innerHeight;

    VAR.defaultScale = VAR.H / 974; //974px Standard innerHeight on 1920x1080 desktop - chrome

    VAR.scale = VAR.H / 974; //974px Standard innerHeight on 1920x1080 desktop - chrome
  },

  resizeWindow() {
    Game.setVAR();

    Game.app.renderer.resize(VAR.W, VAR.H);

    Camera.followPlayer(Game.gameData.players[socket.nick], Game.app);

    Map.scale(VAR.scale);

    gameObject.scale(VAR.scale, Game.gameData.players, Game.app);
  },

  simulateFRAME: true,

  gameLoop() {
    const players = Game.gameData.players;

    if (Game.simulateFRAME) {
      for (var i in players) {
        if (players[i].vehicle) {
          players[i].vehicle.position[0] += players[i].modX / 2;

          players[i].vehicle.position[1] += players[i].modY / 2;

          players[i].vehicle.angle += players[i].modAngle / 2;
        }
      }
    }

    //SCALE GAME IN CASE OF SPEED Y

    VAR.scale = VAR.defaultScale * ( 1.04 - Math.abs(players[socket.nick].vehicle.velocity["1"]*0.00015) )
    Map.scale(VAR.scale)

    gameObject.scale(VAR.scale, players, Game.app)

    //

    Camera.followPlayer(players[socket.nick], Game.app);

    for (var i in players) {
      Camera.setPlayerPosition(players[i]);
    }

    gameObject.draw(players, Game.app.stage);

    Game.simulateFRAME = true;
  },

  stop: function() {}
};
